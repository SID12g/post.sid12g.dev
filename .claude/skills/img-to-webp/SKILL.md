---
name: img-to-webp
description: PNG, JPG/JPEG, BMP, TIFF 등 다양한 래스터 이미지를 WebP로 일괄 변환하는 스킬. public 디렉토리(또는 지정 디렉토리)의 대상 포맷 이미지 파일을 WebP로 압축 변환하고, 압축률 결과를 보고하며, 소스 코드 내 이미지 확장자 참조를 WebP로 자동 교체하고, 빌드 테스트까지 실행한다. 사용자가 "png를 webp로", "jpg를 webp로", "이미지를 webp로 변환", "이미지 최적화", "이미지 압축", "webp 변환", "이미지 용량 줄이기" 등을 언급할 때 반드시 이 스킬을 사용하라. 이미지 최적화나 빌드 성능 개선을 원할 때도 트리거하라.
---

# 이미지 → WebP 변환 스킬

PNG, JPG/JPEG, BMP, TIFF 등 여러 포맷의 이미지를 WebP로 일괄 변환하고, 코드 내 참조를 자동으로 업데이트한 뒤 빌드 테스트를 수행하는 스킬.

---

## 지원 포맷

기본적으로 아래 확장자를 변환 대상으로 삼는다. 사용자가 특정 포맷만 지정하면 그 포맷만 처리한다.

| 확장자           | 기본 포함 여부 | 비고                                                                   |
| ---------------- | -------------- | ---------------------------------------------------------------------- |
| `.png`           | ✅             | 알파 채널(투명도) 완벽 지원                                            |
| `.jpg` / `.jpeg` | ✅             | 무손실 아님, 원본 자체가 손실 압축이므로 재변환 시 화질 저하 누적 주의 |
| `.bmp`           | ✅             | 무압축 원본이라 압축률이 가장 크게 나타남                              |
| `.tif` / `.tiff` | ✅             | 대용량 원본이 많아 변환 효과가 큼                                      |
| `.gif`           | ❌ (기본 제외) | 애니메이션 GIF는 별도 처리 필요 (아래 "GIF 처리" 참조)                 |
| `.svg`           | ❌             | 벡터 포맷이므로 변환 대상 아님                                         |

사용자가 "png만", "jpg만" 등으로 명시하면 아래 스크립트의 확장자 목록(`EXTENSIONS`)을 그에 맞게 좁힌다.

---

## 전체 워크플로우

1. **환경 확인** — 필수 도구 설치 확인 및 설치
2. **대상 이미지 탐색** — 지정 디렉토리에서 대상 포맷 파일 목록 수집
3. **WebP 변환** — 각 이미지를 WebP로 변환, 원본 유지
4. **압축 결과 보고** — 파일별 / 전체 압축률 표시
5. **코드 참조 교체** — 소스 파일 내 원본 확장자 → `.webp` 경로 수정
6. **교체 결과 보고** — 수정된 파일 및 라인 목록 표시
7. **빌드 테스트** — 프로젝트 빌드 실행 및 결과 확인
8. **원본 이미지 정리** (선택) — 사용자 확인 후 원본 삭제

---

## Step 1: 환경 확인 및 도구 설치

```bash
# cwebp 설치 확인 (PNG/JPEG 전용, 가장 빠름)
if ! command -v cwebp &> /dev/null; then
  echo "cwebp 설치 중..."
  sudo apt-get install -y webp 2>/dev/null || \
  brew install webp 2>/dev/null || \
  npm install -g cwebp-bin 2>/dev/null
fi
cwebp -version

# BMP/TIFF까지 포괄적으로 지원하려면 Pillow 권장 (모든 포맷 단일 경로로 처리 가능)
pip install Pillow --break-system-packages
```

**권장**: cwebp는 PNG/JPEG만 직접 지원하므로, BMP/TIFF가 섞여 있다면 Step 3에서 Pillow 경로를 사용하는 것이 관리가 더 쉽다.

---

## Step 2: 대상 이미지 탐색

대상 디렉토리(기본: `public/`, `src/assets/`, `assets/`)에서 지정 포맷 파일을 모두 수집.

```bash
# 기본 확장자 목록 (필요 시 조정)
EXTENSIONS=("png" "jpg" "jpeg" "bmp" "tif" "tiff")

# find용 -iname 패턴 동적 생성 (대소문자 무시)
build_find_expr() {
  local expr=()
  for ext in "${EXTENSIONS[@]}"; do
    expr+=(-o -iname "*.${ext}")
  done
  echo "${expr[@]:1}"  # 맨 앞 -o 제거
}

find ./public ./src/assets ./assets \( $(build_find_expr) \) 2>/dev/null | sort

# 특정 디렉토리만 탐색하려면
find <TARGET_DIR> \( $(build_find_expr) \) | sort
```

사용자가 디렉토리나 포맷을 명시하지 않으면 위 기본값을 사용한다.

---

## Step 3: WebP 변환

### 방법 A — Pillow 사용 (권장: 모든 포맷 단일 경로)

```bash
python3 - << 'EOF'
from PIL import Image
from pathlib import Path

target_dir = Path("./public")
extensions = ["*.png", "*.jpg", "*.jpeg", "*.bmp", "*.tif", "*.tiff"]

for pattern in extensions:
    for src_path in target_dir.rglob(pattern):
        webp_path = src_path.with_suffix(".webp")
        img = Image.open(src_path)

        # JPEG/BMP 등 팔레트·CMYK 이미지는 RGBA/RGB로 정규화
        if img.mode in ("P", "CMYK"):
            img = img.convert("RGBA" if "transparency" in img.info else "RGB")

        img.save(webp_path, "WEBP", quality=85, method=6)
        print(f"변환 완료: {src_path} → {webp_path}")
EOF
```

### 방법 B — cwebp 사용 (PNG/JPEG만 해당, BMP/TIFF는 자동 스킵됨)

```bash
for src_file in $(find ./public \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \)); do
  webp_file="${src_file%.*}.webp"
  case "$src_file" in
    *.png|*.PNG) cwebp -q 85 "$src_file" -o "$webp_file" ;;
    *.jpg|*.jpeg|*.JPG|*.JPEG) cwebp -q 85 "$src_file" -o "$webp_file" ;;
  esac
done
```

**품질 설정 기준**:

- `85` — 기본값, 고품질 + 우수한 압축률
- `75` — 더 공격적인 압축 (아이콘, 배경 등)
- `90` — 고품질 유지 (포트폴리오, 상품 이미지). JPEG 원본처럼 이미 손실 압축된 파일은 90 이상을 권장해 화질 저하를 최소화한다.

**주의 — JPEG 재압축**: JPEG는 원본 자체가 손실 압축이므로, WebP로 다시 변환하면 손실이 이중으로 누적된다. 원본 화질이 중요한 사진이라면 품질 값을 90~95로 높이거나 변환 전후 육안 비교를 권장한다고 사용자에게 안내한다.

---

## Step 4: 압축 결과 보고

변환 완료 후 반드시 아래 형식으로 결과를 출력한다 (포맷별로 구분 표시).

```
📦 이미지 → WebP 변환 결과
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
파일명                  원본 포맷   원본 크기   WebP 크기   압축률
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
hero.png                PNG      1,240 KB   → 312 KB   (-74.8%)
photo.jpg               JPEG       860 KB   → 410 KB   (-52.3%)
banner.bmp              BMP      3,120 KB   → 298 KB   (-90.4%)
scan.tiff               TIFF     5,400 KB   → 512 KB   (-90.5%)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
전체 합계                        10,620 KB   → 1,532 KB (-85.6%) 🎉
```

결과 계산 방법:

```bash
python3 - << 'EOF'
from pathlib import Path

extensions = ["*.png", "*.jpg", "*.jpeg", "*.bmp", "*.tif", "*.tiff"]
total_src = 0
total_webp = 0
rows = []

for pattern in extensions:
    for src in Path("./public").rglob(pattern):
        webp = src.with_suffix(".webp")
        if webp.exists():
            ps, ws = src.stat().st_size, webp.stat().st_size
            ratio = (ps - ws) / ps * 100
            total_src += ps; total_webp += ws
            rows.append((src.name, src.suffix.lstrip(".").upper(), ps, ws, ratio))

print(f"{'파일명':<25} {'포맷':<6} {'원본':>10} {'WebP':>10} {'압축률':>10}")
print("─" * 70)
for name, fmt, ps, ws, r in rows:
    print(f"{name:<25} {fmt:<6} {ps//1024:>8}KB {ws//1024:>8}KB ({-r:>+.1f}%)")
print("─" * 70)
tr = (total_src - total_webp) / total_src * 100 if total_src else 0
print(f"{'합계':<25} {'':<6} {total_src//1024:>8}KB {total_webp//1024:>8}KB ({-tr:>+.1f}%)")
EOF
```

---

## Step 5: 코드 내 이미지 참조 교체

소스 코드(`.js`, `.ts`, `.jsx`, `.tsx`, `.vue`, `.html`, `.css`, `.scss`, `.md`, `.json`) 내의 대상 확장자 경로를 `.webp`로 교체.

```bash
# 교체 전 영향받는 파일 미리 확인 (모든 대상 확장자)
grep -rlE '\.(png|jpe?g|bmp|tiff?)' ./src ./public \
  --include="*.{js,ts,jsx,tsx,vue,html,css,scss,md,json}" 2>/dev/null

# 실제 교체 (sed 사용, 확장자별로 순차 적용)
for ext in png jpg jpeg bmp tif tiff; do
  find ./src -type f \( -name "*.js" -o -name "*.ts" -o -name "*.jsx" \
    -o -name "*.tsx" -o -name "*.vue" -o -name "*.html" \
    -o -name "*.css" -o -name "*.scss" -o -name "*.md" \) \
    -exec sed -i \
      "s/\.${ext}\"/\.webp\"/g; s/\.${ext}'/\.webp'/g; s/\.${ext}\`/\.webp\`/g" {} +
done

# Next.js Image 컴포넌트, CSS url() 등 추가 패턴
find ./src -type f -exec sed -i \
  -E 's|src=\{([^}]*)\.(png|jpe?g|bmp|tiff?)\}|src={\1.webp}|g' {} + 2>/dev/null
```

**중요**: 교체 전 git 상태를 확인하거나 백업을 권장한다. 특히 JPEG는 `.jpg`와 `.jpeg` 두 확장자가 혼용되는 경우가 많으니 둘 다 처리했는지 확인한다.

---

## Step 6: 교체 결과 보고

교체 후 반드시 아래 형식으로 결과를 출력한다.

```
🔄 코드 참조 교체 결과
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
파일                              교체 건수
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/components/Hero.tsx               3건 (png 2, jpg 1)
src/pages/index.tsx                   1건 (png)
src/styles/global.css                 2건 (bmp 1, tiff 1)
public/index.html                     1건 (jpeg)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
총 4개 파일, 7건 교체 완료
```

교체 건수 집계:

```bash
grep -rn '\.webp' ./src --include="*.{js,ts,tsx,jsx,vue,css}" | \
  awk -F: '{print $1}' | sort | uniq -c | sort -rn
```

---

## Step 7: 빌드 테스트

프로젝트 타입을 자동 감지하고 빌드를 실행한다.

```bash
if [ -f "package.json" ]; then
  if [ -f "pnpm-lock.yaml" ]; then
    pnpm run build
  elif [ -f "yarn.lock" ]; then
    yarn build
  else
    npm run build
  fi
elif [ -f "Makefile" ]; then
  make build
elif [ -f "Cargo.toml" ]; then
  cargo build --release
fi
```

**빌드 성공 시**:

```
✅ 빌드 성공 — 에러 없음
   빌드 시간: 12.4s
   출력 디렉토리: ./dist (총 2.3MB)
```

**빌드 실패 시**: 에러 메시지를 분석하여 원인을 설명하고 수정 방안을 제시한다. 일반적인 원인:

- 일부 이미지가 변환되지 않음 (특히 BMP/TIFF는 cwebp가 스킵하므로 Pillow 경로 재확인) → 해당 파일 재변환
- 동적 import 경로 (`require(\`./img/${name}.png\``)`) → 수동 수정 필요
- CSS `url()` 내 경로 미교체 → 별도 패턴으로 재처리
- `.jpg`/`.jpeg` 확장자 혼용으로 일부만 교체됨 → 둘 다 처리했는지 확인

---

## Step 8: 원본 이미지 정리 (선택)

빌드 성공 확인 후 사용자에게 원본 삭제 여부를 묻는다.

```
❓ 원본 이미지 파일 삭제 여부
   변환된 원본 파일 18개 (PNG 12 / JPEG 4 / BMP 1 / TIFF 1, 총 10,620KB)를
   삭제하시겠습니까? (WebP 파일은 유지됩니다)
   [y/N]:
```

사용자 동의 시:

```bash
find ./public \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \
  -o -iname "*.bmp" -o -iname "*.tif" -o -iname "*.tiff" \) -delete
echo "🗑️  원본 이미지 파일 삭제 완료"
```

---

## 최종 요약 출력 형식

```
═══════════════════════════════════════════════
🎉 이미지 → WebP 변환 완료 요약
═══════════════════════════════════════════════
📦 이미지 변환    18개 파일, 10,620KB → 1,532KB (-85.6%)
   ├─ PNG  12개
   ├─ JPEG  4개
   ├─ BMP   1개
   └─ TIFF  1개
🔄 코드 교체      4개 파일, 7건 수정
✅ 빌드 테스트    성공 (12.4s)
🗑️  원본 정리     18개 파일 삭제 완료 (선택 완료)
═══════════════════════════════════════════════
```

---

## GIF 처리 (기본 제외 이유 및 대응)

- **정지 GIF**: 애니메이션이 없는 단일 프레임 GIF는 PNG와 동일하게 안전히 WebP로 변환 가능. `EXTENSIONS`에 `"gif"`를 추가하면 된다.
- **애니메이션 GIF**: WebP도 애니메이션을 지원하지만, 단순 `cwebp`/`Image.save()` 방식으로는 첫 프레임만 변환되어 애니메이션이 손실된다. 애니메이션을 유지하려면 `gif2webp` 도구를 별도로 사용해야 한다:
  ```bash
  gif2webp -q 85 input.gif -o output.webp
  ```
- 따라서 GIF는 기본 대상에서 제외하고, 사용자가 명시적으로 요청할 때만 정지/애니메이션 여부를 확인한 뒤 처리한다.

---

## 주의 사항 및 엣지 케이스

- **SVG**: 벡터 포맷이므로 변환 대상에서 항상 제외
- **투명도(알파 채널)**: PNG, BMP(일부), TIFF의 알파 채널은 WebP가 완벽 지원하므로 안전하게 변환됨. JPEG는 애초에 알파 채널이 없음
- **파비콘(favicon.png)**: 브라우저 호환성을 위해 변환 목록에서 제외하는 것을 권장
  ```bash
  find ./public \( -iname "*.png" -o -iname "*.jpg" \) \
    ! -iname "favicon*" ! -iname "apple-touch-icon*"
  ```
- **동적 경로**: `require(\`./img/${name}.png\``)` 같은 동적 참조는 자동 교체 불가 → 사용자에게 위치를 알려주고 수동 수정 안내
- **브라우저 호환성**: WebP는 모든 모던 브라우저에서 지원됨 (IE 제외). IE 지원이 필요하면 `<picture>` 태그로 폴백 제공 권장
- **JPEG 재압축 손실**: 위 Step 3 참조 — 손실 누적에 유의
- **BMP/TIFF 대용량 원본**: 무압축/저압축 포맷이라 압축률이 매우 높게(80~95%) 나오는 것이 정상이며 과장이 아님
- **git 백업**: 교체 전 `git stash` 또는 커밋 상태 확인을 권장

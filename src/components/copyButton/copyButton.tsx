"use client";
import styles from "@/components/copyButton/copyButton.module.css";
import Image from "next/image";
import copy from "@/../public/icons/copy.svg";
import { usePathname } from "next/navigation";

export default function CopyButton() {
  const router = usePathname();
  function copyPath() {
    window.navigator.clipboard
      .writeText(`https://post.sid12g.dev` + router)
      .then(() => {
        alert("링크가 복사되었습니다!");
      });
  }
  return (
    <div className={styles.container} onClick={copyPath}>
      <Image
        className={styles.icon}
        src={copy}
        alt="copy icon"
        width={20}
        height={20}
      />
      <p className={styles.text}>포스트 공유하기</p>
    </div>
  );
}

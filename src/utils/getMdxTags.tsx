import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

const blogDir: string = "blogs";
const files: string[] = fs.readdirSync(path.join(blogDir));

// 태그와 해당 횟수를 저장할 객체
const tagCounts: { [tag: string]: number } = {};

files.forEach((filename: string) => {
    const fileContent: string = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
    const { data: frontMatter } = matter(fileContent);

    // 이미 등록된 태그라면 횟수 증가, 아니면 1로 초기화
    if (tagCounts[frontMatter.tag]) {
        tagCounts[frontMatter.tag]++;
    } else {
        tagCounts[frontMatter.tag] = 1;
    }
});

// 객체를 배열로 변환하고 횟수에 따라 내림차순, 태그에 따라 문자열 순서로 정렬
const getTagsWithCounts: [string][] = Object.entries(tagCounts)
    .sort((a, b) => {
        // 태그 수가 같으면 문자열 비교로 정렬
        if (b[1] === a[1]) {
            return a[0].localeCompare(b[0]);
        }
        // 그 외의 경우에는 횟수에 따라 내림차순 정렬
        return b[1] - a[1];
    })
    .map(([tag]) => [tag]);

export default getTagsWithCounts;

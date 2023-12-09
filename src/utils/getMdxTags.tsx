import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDir = "blogs";
const files = fs.readdirSync(path.join(blogDir));

// Set을 사용하여 중복된 태그 제거
const uniqueTags = new Set();

files.forEach((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
    const { data: frontMatter } = matter(fileContent);
    uniqueTags.add(frontMatter.tag);
});

// Set을 배열로 변환
const getTags = Array.from(uniqueTags);

export default getTags;

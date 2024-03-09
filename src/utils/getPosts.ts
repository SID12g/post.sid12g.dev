import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postDir = "posts";
const files = fs.readdirSync(path.join(process.cwd(), postDir));

const posts = files
  .map((filename) => {
    const fileContent = fs.readFileSync(path.join(postDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  })
  .filter((post) => post.meta.tag);

export default posts;

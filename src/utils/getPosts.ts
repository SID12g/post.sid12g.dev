import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDir = "posts";
const files = fs.readdirSync(path.join(process.cwd(), postDir));

const allPosts = files
  .map((filename) => {
    const fileContent = fs.readFileSync(path.join(postDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
      // contet: fileContent,
    };
  })
  .filter((post) => post.meta.tag);

const posts = allPosts.sort((a, b) => {
  const dateA = a.meta.date.toLowerCase();
  const dateB = b.meta.date.toLowerCase();
  return dateB.localeCompare(dateA);
});

export default posts;

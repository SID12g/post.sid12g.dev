import fs from "fs";
import path from "path";
import matter from "gray-matter";
const blogDir = "blogs";
const files = fs.readdirSync(path.join(process.cwd(), blogDir));

const filteredBlogs = files
  .map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
      content: matter(fileContent).content,
    };
  })
  .filter((blog) => blog.meta.tag);

export default filteredBlogs;

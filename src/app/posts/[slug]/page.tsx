import styles from "@/app/posts/[slug]/page.module.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import "@/highlight-js/github-dark.css";
import Image from "next/image";

const options: any = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateMetadata({ params }: any) {
  const post = getPost(params);
  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description,
  };
}

export default function Post({ params }: any) {
  const props = getPost(params);

  return (
    <article>
      <h1>{props.frontMatter.title}</h1>
      <Image
        src={props.frontMatter.image}
        className={styles.image}
        alt="preview"
        width={192}
        height={108}
      />
      <MDXRemote source={props.content} options={options} />
    </article>
  );
}

import styles from "@/app/tech/posts/[slug]/page.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { techTags } from "@/utils/getTags";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

const options: any = {
  mdxOptions: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: [styles.anchor],
          },
        },
      ],
    ],
  },
};

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("contents/tech", slug + ".mdx"),
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
    openGraph: {
      title: post.frontMatter.title,
      description: post.frontMatter.description,
      url: `https://post.sid12g.dev/tech/posts/${post.slug}`,
      images: [
        {
          url: `https://post.sid12g.dev/tech/posts/${post.slug}/Thumbnail.png`,
        },
      ],
      locale: "ko_KR",
      type: "article",
    },
  };
}

export default function Post({ params }: { params: { slug: string } }) {
  const props = getPost(params);
  function getLink() {
    return techTags.find((tags) => tags.tag == props.frontMatter.tag)?.link;
  }
  return (
    <article className={styles.article}>
      <Image
        src={props.frontMatter.image}
        className={styles.image}
        alt="preview"
        width={1920}
        height={1080}
      />
      <h1 className={styles.title}>{props.frontMatter.title}</h1>
      <div className={styles.information_wrap}>
        <Link className={styles.tag} href={"/tech/" + getLink()}>
          {props.frontMatter.tag}
        </Link>
        <p className={styles.date}>{props.frontMatter.date}</p>
      </div>
      <p className={styles.description}>{props.frontMatter.description}</p>
      <div className={styles.content}>
        <MDXRemote source={props.content} options={options} />
      </div>
    </article>
  );
}

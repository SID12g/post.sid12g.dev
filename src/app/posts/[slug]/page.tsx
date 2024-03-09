import styles from "@/app/posts/[slug]/page.module.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import "@/highlight-js/github-dark.css";
import Image from "next/image";
import Date from "@/components/date/date";
import Tag from "@/components/tag/tag";
import Link from "next/link";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";
import { tags } from "@/utils/getTags";
import { tagStyles } from "@/app/styles/tagStlye";
import Comments from "@/components/comments/comments";

const options: any = {
  mdxOptions: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [
      rehypeSlug,
      rehypeHighlight,
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
    openGraph: {
      title: post.frontMatter.title,
      description: post.frontMatter.description,
      url: `https://post.sid12g.dev/posts/${post.slug}`,
      images: [
        { url: `https://post.sid12g.dev/posts/${post.slug}/Thumbnail.png` },
      ],
      locale: "ko_KR",
      type: "article",
    },
  };
}

export default function Post({ params }: any) {
  const props = getPost(params);
  function tagInfo() {
    // console.log("tag", tag);
    return tagStyles.find((tags) => tags.tag == props.frontMatter.tag);
  }
  function getLink() {
    return tags.find((tags) => tags.tag == props.frontMatter.tag)?.link;
  }
  return (
    <article className={styles.container}>
      <div className={styles.info}>
        <Date date={props.frontMatter.date} />
        <Link href={"/tags/" + getLink()} style={{ textDecoration: "none" }}>
          <Tag
            border={tagInfo()?.border || "black"}
            background={tagInfo()?.background || "black"}
            color={tagInfo()?.color || "white"}
            tag={props.frontMatter.tag}
          />
        </Link>
      </div>
      <h1 className={styles.title}>{props.frontMatter.title}</h1>
      <p className={styles.description}>{props.frontMatter.description}</p>
      <Image
        src={props.frontMatter.image}
        className={styles.image}
        alt="preview"
        width={1920}
        height={1080}
      />
      <div className={styles.content}>
        <MDXRemote source={props.content} options={options} />
      </div>
      <Comments />
    </article>
  );
}

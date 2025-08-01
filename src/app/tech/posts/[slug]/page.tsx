import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Article from "@/components/article/article";
import { techContents } from "@/utils/tech/getPosts";

export async function generateStaticParams() {
  return techContents.map((post) => ({
    slug: post.slug,
  }));
}

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = getPost(await params);

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description,
    openGraph: {
      title: post.frontMatter.title,
      description: post.frontMatter.description,
      url: `https://post.sid12g.dev/tech/posts/${post.slug}`,
      images: [
        {
          url: `https://post.sid12g.dev/contents/tech/${post.slug}/thumbnail.webp`,
        },
      ],
      locale: "ko_KR",
      type: "article",
    },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const props = getPost(await params);
  return <Article props={props} location="tech" />;
}

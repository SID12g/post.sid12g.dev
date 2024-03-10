import posts from "@/utils/getPosts";
import { MetadataRoute } from "next";

const URL = "https://post.sid12g.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const postList = posts.map((postName) => ({
    name: postName.meta.title,
    slug: postName.slug,
    // content: postName.content,
    date: postName.meta.date,
  }));
  const postsRoute = postList.map(({ slug, date }) => {
    return {
      url: `${URL}/posts/${slug}`,
      lastModified: date,
    };
  });

  const routes = [""].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...postsRoute];
}

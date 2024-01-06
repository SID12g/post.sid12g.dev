import filteredBlogs from "@/utils/getMdxPosts";
import { MetadataRoute } from "next";

function convertDateStringToYmd(dateString: string): string {
    const dateParts = dateString.match(/(\d{4})년 (\d{1,2})월 (\d{1,2})일/);
  
    if (dateParts) {
      const year = dateParts[1];
      const month = dateParts[2].padStart(2, '0');
      const day = dateParts[3].padStart(2, '0');
  
      return `${year}-${month}-${day}`;
    } else {
      throw new Error('잘못된 날짜 형식입니다.');
    }
  }  

const URL = 'https://blog.sid12g.dev';

export default function sitemap(): MetadataRoute.Sitemap {
    const postList = filteredBlogs.map(postName => ({
      name: postName.meta.title,
      slug: postName.slug,
      content: postName.content,
      date: postName.meta.date,
    }));
    const postsRoute = postList.map(({ slug, date }) => {
      return {
        url: `${URL}/posts/${slug}`,
        lastModified: convertDateStringToYmd(date),
      };
    });
  
    const routes = [''].map(route => ({
      url: `${URL}${route}`,
      lastModified: new Date().toISOString(),
    }));
  
    return [...routes, ...postsRoute];
  }
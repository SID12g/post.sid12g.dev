import SayHello from "@/components/home/SayHello";
import styles from "../styles/page.module.css";
import { Tags } from "@/components/home/Tags";
import PostList from "@/components/home/PostList";
import filteredBlogs from "@/utils/getMdxPosts";
import getTagsWithCounts from "@/utils/getMdxTags";
import { cookies } from "next/headers";
import Link from "next/link";

export default function Home() {
  // 쿠키 초기화 및 'mode' 속성이 없는 경우 기본값 설정
  const cookie = cookies().get("mode") || { value: "light" };

  // 함수 호출을 통한 tags 및 getBlogs 초기화
  const tags = getTagsWithCounts;
  const getBlogs = filteredBlogs;

  return (
    <div className={cookie.value === "dark" ? styles.wrap_dark : styles.wrap}>
      <meta property="og:title" content={`sid12g's blog`} />
      <meta property="og:description" content={"Welcome to my blog"} />
      <meta property="og:url" content={`https://blog.sid12g.dev`} />
      <meta
        property="og:image"
        content={`https://blog.sid12g.dev/blog_image.png`}
      />
      <meta property="og:type" content="article" />
      <meta
        name="naver-site-verification"
        content="9bf9b88ba490229476666552459bfc9e3d272555"
      />

      <title>{`sid12g's blog`}</title>

      <SayHello />
      <Tags tags={tags} mode={cookie} />
      <PostList getBlogs={getBlogs} mode={cookie} />
    </div>
  );
}

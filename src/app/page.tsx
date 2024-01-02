'use server'
import SayHello from "@/components/home/SayHello";
import styles from '../styles/page.module.css'
import { Tags } from "@/components/home/Tags";
import PostList from "@/components/home/PostList";
import filteredBlogs from "@/utils/getMdxPosts";
import getTagsWithCounts from "@/utils/getMdxTags";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export default async function Home() {
  let cookie = getCookie('mode', {cookies})
  console.log(cookie)
  const tags: unknown[] = getTagsWithCounts
  const getBlogs: unknown[] = filteredBlogs
  return (
    <div className={styles.wrap}>
      <SayHello />
      <Tags tags={tags} />
      <PostList getBlogs={getBlogs} />
    </div>
  )
}

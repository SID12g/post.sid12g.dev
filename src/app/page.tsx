import SayHello from "@/components/home/SayHello";
import styles from '../styles/page.module.css'
import { Tags } from "@/components/home/Tags";
import PostList from "@/components/home/PostList";
import filteredBlogs from "@/utils/getMdxPosts";
import getTagsWithCounts from "@/utils/getMdxTags";
import { cookies } from 'next/headers'

export default function Home() {
  let cookie: any = cookies().get('mode')
  const tags: unknown[] = getTagsWithCounts
  const getBlogs: unknown[] = filteredBlogs
  if(cookie == null) {
    cookie = 'light'
  }
  return (
    <div className={cookie != undefined && cookie.value == 'dark' ? styles.wrap_dark : styles.wrap}>
      <SayHello />
      <Tags tags={tags} mode={cookie} />
      <PostList getBlogs={getBlogs} mode={cookie} />
    </div>
  )
}

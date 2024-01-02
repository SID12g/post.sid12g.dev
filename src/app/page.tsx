import SayHello from "@/components/home/SayHello";
import styles from '../styles/page.module.css'
import { Tags } from "@/components/home/Tags";
import PostList from "@/components/home/PostList";
import filteredBlogs from "@/utils/getMdxPosts";
import getTagsWithCounts from "@/utils/getMdxTags";

export default function Home() {
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

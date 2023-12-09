import SayHello from "@/components/home/SayHello";
import styles from '../styles/page.module.css'

import getTags from "@/utils/getMdxTags";
import { Tags } from "@/components/home/Tags";
import PostList from "@/components/home/PostList";

export default function Home() {
  const tags: unknown[] = getTags
  return (
    <div className={styles.wrap}>
      <SayHello />
      <Tags tags={tags} />
      <PostList />
    </div>
  )
}

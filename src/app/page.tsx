import SayHello from "@/components/home/SayHello";
import styles from '../styles/page.module.css'
import Tags from "@/components/home/Tags";
import PostList from "@/components/home/PostList";

export default function Home() {
  return (
    <div className={styles.wrap}>
      <SayHello />
      <Tags />
      <PostList />
    </div>
  )
}

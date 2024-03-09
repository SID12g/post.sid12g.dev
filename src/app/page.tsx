import Profile from "@/components/profile/profile";
import styles from "./page.module.css";
import NewPost from "@/components/newPost/newPost";
import PostList from "@/components/postList/postList";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <h1 className={styles.newText}>NEW. 새로운 포스트 🔥</h1>
        <div className={styles.topContent}>
          <NewPost />
          <Profile />
        </div>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.allText}>ALL. 모든 포스트 📖</h1>
        <PostList tag="All Posts" />
      </div>
    </main>
  );
}

import Profile from "@/components/profile/profile";
import styles from "./page.module.css";
import NewPost from "@/components/newPost/newPost";
import PostList from "@/components/postList/postList";
import getPosts from "@/utils/getPosts";
import filteredBlogs from "@/utils/getPosts";
import filteredPosts from "@/utils/getPosts";
import posts from "@/utils/getPosts";

export default function Home() {
  console.log(posts);
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

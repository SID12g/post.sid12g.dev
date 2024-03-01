import Profile from "@/components/profile/profile";
import styles from "./page.module.css";
import Post from "@/components/post/post";
import NewPost from "@/components/newPost/newPost";

export default function Home() {
  return (
    <main className={styles.main}>
      <NewPost />
      <Profile />
      <Post />
    </main>
  );
}

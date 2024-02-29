import Profile from "@/components/profile/profile";
import styles from "./page.module.css";
import Post from "@/components/post/post";

export default function Home() {
  return (
    <main className={styles.main}>
      <Profile />
      <Post />
    </main>
  );
}

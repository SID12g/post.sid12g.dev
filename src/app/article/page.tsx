import styles from "@/app/article/page.module.css";
import Background from "@/components/background/background";
import Posts from "@/components/posts/posts";
import Tags from "@/components/tags/tags";

export default function Tech() {
  return (
    <main className={styles.main}>
      <Background location="article" />
      <Tags location="article" nowTag="" />
      <Posts location="article" nowTag="" />
    </main>
  );
}

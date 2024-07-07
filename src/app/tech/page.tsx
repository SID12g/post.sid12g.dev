import styles from "@/app/tech/page.module.css";
import Background from "@/components/background/background";
import Posts from "@/components/posts/posts";
import Tags from "@/components/tags/tags";

export default function Tech() {
  return (
    <main className={styles.main}>
      <Background location="tech" />
      <Tags location="tech" nowTag="" />
      <Posts location="tech" nowTag="" />
    </main>
  );
}

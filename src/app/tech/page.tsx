import styles from "@/app/tech/page.module.css";
import Background from "@/components/background/background";
import Tags from "@/components/tags/tags";
import { techTags } from "@/utils/getTags";

export default function Tech() {
  console.log(techTags);
  return (
    <main className={styles.main}>
      <Background />
      <Tags location="tech" nowTag="" />
    </main>
  );
}

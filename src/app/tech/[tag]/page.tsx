import styles from "@/app/tech/[tag]/page.module.css";
import Background from "@/components/background/background";
import Posts from "@/components/posts/posts";
import Tags from "@/components/tags/tags";
import { techContents } from "@/utils/getPosts";
import { techTags } from "@/utils/getTags";

export default function Tech({ params }: { params: { tag: string } }) {
  console.log(techTags);
  console.log(techContents);
  return (
    <main className={styles.main}>
      <Background />
      <Tags location="tech" nowTag={params.tag} />
      <Posts location="tech" nowTag={params.tag} />
    </main>
  );
}

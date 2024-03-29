import styles from "@/app/tags/[slug]/page.module.css";
import PostList from "@/components/postList/postList";
import { tags } from "@/utils/getTags";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Tags({ params }: { params: { slug: string } }) {
  function getTag() {
    if (tags.find((tags) => tags.link == params.slug)?.tag === undefined) {
      redirect("/not-found");
    } else {
      return tags.find((tags) => tags.link == params.slug)?.tag;
    }
  }

  function getCount() {
    return tags.find((tags) => tags.link == params.slug)?.count;
  }
  getTag();

  return (
    <main className={styles.main}>
      <div>
        <div className={styles.nowInfo}>
          <h2 className={styles.nowTag}>
            {params.slug === "all" ? "ALL POSTS." : getTag() + "."}{" "}
          </h2>
          <p className={styles.nowCount}>({getCount()})</p>
        </div>
        <div className={styles.tagsWrap}>
          {tags.map((tag, index) => (
            <Link
              className={styles.link}
              href={"/tags/" + tag.link}
              key={index}
              style={tag.tag == getTag() ? { color: "grey" } : {}}
            >
              <p className={styles.tag}>
                {tag.tag} ({tag.count})
              </p>
            </Link>
          ))}
        </div>
        <div className={styles.bottom}>
          <PostList tag={getTag() || "All Posts"} />
        </div>
      </div>
    </main>
  );
}

import styles from "@/app/tags/[slug]/page.module.css";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Tags({ params }: { params: { slug: string } }) {
  console.log(params);
  const tags = [
    { tag: "All", count: 10, link: "all" },
    { tag: "Next", count: 1, link: "next" },
    { tag: "React", count: 2, link: "react" },
    { tag: "Firebase", count: 3, link: "firebase" },
    { tag: "React Native", count: 7, link: "react-native" },
    { tag: "React", count: 2, link: "react" },
    { tag: "Firebase", count: 3, link: "firebase" },
    { tag: "React Native", count: 7, link: "react-native" },
  ];
  function getLink() {
    if (tags.find((tag) => tag.link == params.slug)?.tag === undefined) {
      redirect("/not-found");
    } else {
      return tags.find((tag) => tag.link == params.slug)?.tag;
    }
  }
  getLink();
  return (
    <main className={styles.main}>
      <div>
        <h2 className={styles.nowTag}>
          {params.slug === "all" ? "ALL POSTS." : getLink() + "."}
        </h2>
        <div className={styles.tagsWrap}>
          {tags.map((tag, index) => (
            <Link
              className={styles.link}
              href={"/tags/" + tag.link}
              key={index}
            >
              <p className={styles.tag}>
                {tag.tag} ({tag.count})
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

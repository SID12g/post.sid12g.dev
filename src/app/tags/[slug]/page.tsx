import styles from "@/app/tags/[slug]/page.module.css";
import Post from "@/components/post/post";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Tags({ params }: { params: { slug: string } }) {
  console.log(params);
  const tags = [
    { tag: "All Posts", count: 10, link: "all-posts" },
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

  function getCount() {
    return tags.find((tag) => tag.link == params.slug)?.count;
  }
  getLink();
  var list = [
    {
      title: "1번 글 입니다.",
      description: "이건 1번 글의 설명입니다.",
      date: "2000-00-00",
    },
    {
      title: "2번 글 입니다.",
      description: "이건 2번 글의 설명입니다.",
      date: "2000-00-00",
    },
    {
      title: "3번 글 입니다.",
      description: "이건 3번 글의 설명입니다.",
      date: "2000-00-00",
    },
    {
      title: "4번 글 입니다.",
      description: "이건 4번 글의 설명입니다.",
      date: "2000-00-00",
    },
    {
      title: "5번 글 입니다.",
      description: "이건 5번 글의 설명입니다.",
      date: "2000-00-00",
    },
    {
      title: "6번 글 입니다.",
      description: "이건 6번 글의 설명입니다.",
      date: "2000-00-00",
    },
  ];
  var list1 = [
    {
      title: "1번 글 입니다.",
      description: "이건 1번 글의 설명입니다.",
      date: "2000-00-00",
    },
    {
      title: "3번 글 입니다.",
      description: "이건 1번 글의 설명입니다.",
      date: "2000-00-00",
    },
    {
      title: "5번 글 입니다.",
      description: "이건 1번 글의 설명입니다.",
      date: "2000-00-00",
    },
  ];
  var list2 = [
    {
      title: "2번 글 입니다.",
      description: "이건 2번 글의 설명입니다.",
      date: "2000-00-00",
    },
    {
      title: "4번 글 입니다.",
      description: "이건 1번 글의 설명입니다.",
      date: "2000-00-00",
    },
    {
      title: "6번 글 입니다.",
      description: "이건 1번 글의 설명입니다.",
      date: "2000-00-00",
    },
  ];
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.nowInfo}>
          <h2 className={styles.nowTag}>
            {params.slug === "all" ? "ALL POSTS." : getLink() + "."}{" "}
          </h2>
          <p className={styles.nowCount}>({getCount()})</p>
        </div>
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
        <div className={styles.bottom}>
          <div className={styles.singlePost}>
            {list.map((post, index) => (
              <Post
                title={post.title}
                description={post.description}
                date={post.date}
                key={index}
              />
            ))}
          </div>
          <div className={styles.doublePost}>
            <div style={{ width: "50%" }}>
              {list1.map((post, index) => (
                <Post
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  key={index}
                />
              ))}
            </div>
            <div style={{ width: 60 }}></div>
            <div style={{ width: "50%" }}>
              {list2.map((post, index) => (
                <Post
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

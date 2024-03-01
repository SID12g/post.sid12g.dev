import Profile from "@/components/profile/profile";
import styles from "./page.module.css";
import Post from "@/components/post/post";
import NewPost from "@/components/newPost/newPost";

export default function Home() {
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
      <div className={styles.top}>
        <h1 className={styles.newText}>NEW. 새로운 포스트 🔥</h1>
        <div className={styles.topContent}>
          <NewPost />
          <Profile />
        </div>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.allText}>ALL. 모든 포스트 📖</h1>
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
    </main>
  );
}

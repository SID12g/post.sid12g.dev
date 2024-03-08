import styles from "@/components/postList/postList.module.css";
import Post from "../post/post";
import { allPosts } from "@/app/data/posts";

export default function PostList({ tag }: { tag: string }) {
  function getPost() {
    if (tag == "All Posts") {
      return allPosts;
    } else {
      return allPosts.filter((post) => post.tag == tag);
    }
  }
  console.log("pl tag: ", tag);
  console.log("pl posts: ", getPost());
  const posts = getPost();
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.postWrap}>
          {posts.map((post, index) => (
            <Post
              title={post.title}
              description={post.description}
              date={post.date}
              tag={post.tag}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

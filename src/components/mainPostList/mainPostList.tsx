import styles from "@/components/mainPostList/mainPostList.module.css";

import posts from "@/utils/getPosts";
import Post from "../post/post";

export default function MainPostList({ tag }: { tag: string }) {
  function getPost() {
    if (tag == "All Posts") {
      return posts;
    } else {
      return posts.filter((post) => post.meta.tag == tag);
    }
  }
  const filteredPosts = getPost();
  const mainPosts = filteredPosts.slice(0, 6);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.postWrap}>
          {mainPosts.map((post, index) => (
            <Post
              title={post.meta.title}
              description={post.meta.description}
              date={post.meta.date}
              image={post.meta.image}
              tag={post.meta.tag}
              slug={post.slug}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

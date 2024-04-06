import styles from "@/components/postList/postList.module.css";
import Post from "../post/post";
import posts from "@/utils/getPosts";

export default function PostList({ tag }: { tag: string }) {
  function getPost() {
    if (tag == "All Posts") {
      return posts;
    } else if (tag == "Main Posts") {
      return posts.slice(0, 6);
    } else {
      return posts.filter((post) => post.meta.tag == tag);
    }
  }
  const filteredPosts = getPost();

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.postWrap}>
          {filteredPosts.map((post, index) => (
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

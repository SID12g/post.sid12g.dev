import styles from '../../styles/PostList.module.css';
import Post from './Post';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const targetTag:string = 'none'; // 태그를 지정

const blogDir = "blogs";
const files = fs.readdirSync(path.join(blogDir));

// 지정된 태그와 일치하는 블로그만 선택
const filteredBlogs = files
  .map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  })
  .filter((blog) => targetTag === 'none' ? blog.meta.tag : blog.meta.tag === targetTag);

export default function PostList() {
  const count = filteredBlogs.length;

  return (
    <div className={styles.wrap}>
      <p className={styles.header}>{targetTag === 'none' ? `📝All Posts (${count})` : `📝${targetTag} (${count})`}</p>
      {filteredBlogs.map((blog, index) => (
        <Post
          key={index}
          link={`/posts/${blog.slug}`}
          date={blog.meta.date}
          title={blog.meta.title}
          description={blog.meta.description}
          image={blog.meta.image}
          tag={blog.meta.tag}
        />
      ))}
    </div>
  );
}

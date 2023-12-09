import styles from '../../styles/PostList.module.css';
import Post from './Post';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { headers } from 'next/headers';

export default function PostList() {
  
  const targetTag = '' === '' ? 'none' : ''; // 태그를 지정

  const blogDir = "blogs";
  const files = fs.readdirSync(path.join(blogDir));

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

'use client'
import { useSearchParams } from 'next/navigation';
import styles from '../../styles/PostList.module.css';
import Post from './Post';
import { useEffect, useState } from 'react';

export default function PostList({ getBlogs }: { getBlogs: any[] }) {
  const params = useSearchParams()
  const nowPath = params.get('tag')
  const [nowTag, setNowTag] = useState(nowPath == null ? 'none' : nowPath);
  useEffect(() => {
    if (nowPath == null) {
      setNowTag('none')
    } else {
      setNowTag(nowPath)
    }
  }, [nowPath])
  const filteredBlogs = getBlogs.filter(blog => nowTag === 'none' ? blog : blog.meta.tag === nowTag);
  const count = filteredBlogs.length;
  return (
    <div className={styles.wrap}>
      <p className={styles.header}>{nowTag === 'none' ? `📝All Posts (${count})` : `📝${nowTag} (${count})`}</p>
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

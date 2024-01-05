'use client'
import { useSearchParams } from 'next/navigation';
import styles from '../../styles/PostList.module.css';
import Post from './Post';
import { useEffect, useState } from 'react';

// ... (import 문장)

export default function PostList({ getBlogs, mode }: { getBlogs: any[], mode: any }) {
  const params = useSearchParams();
  const nowPath = params.get('tag');
  const [nowTag, setNowTag] = useState(nowPath == null ? 'none' : nowPath);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; /** 한 페이지 당 불러오는 글의 수 */

  useEffect(() => {
    if (nowPath == null) {
      setNowTag('none');
    } else {
      setNowTag(nowPath);
    }
    setCurrentPage(1); // 태그가 변경되면 페이지를 리셋
  }, [nowPath]);

  const filteredBlogs = getBlogs.filter(blog => nowTag === 'none' ? blog : blog.meta.tag === nowTag);

  // 날짜순으로 정렬
  const sortedBlogs = filteredBlogs.sort((a, b) => {
    const dateA = a.meta.date.toLowerCase();
    const dateB = b.meta.date.toLowerCase();
    return dateB.localeCompare(dateA);
  });

  // 페이징 로직
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const count = sortedBlogs.length;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  return (
    <div className={styles.wrap}>
      <p className={styles.header}>{nowTag === 'none' ? `📝All Posts (${count})` : `📝${nowTag} (${count})`}</p>
      {currentPosts.map((blog, index) => (
        <Post
          key={index}
          link={`/posts/${blog.slug}`}
          date={blog.meta.date}
          title={blog.meta.title}
          description={blog.meta.description}
          image={blog.meta.image}
          tag={blog.meta.tag}
          mode={mode.value}
        />
      ))}
      <div className={styles.button_wrap}>
        {Array.from({ length: Math.ceil(count / postsPerPage) }).map((_, index) => (
          <button className={currentPage == index + 1 ? styles.now_button : styles.num_button} key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

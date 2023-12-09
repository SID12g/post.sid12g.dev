import React, { ReactNode } from 'react';
import styles from '../../styles/Tags.module.css';
import PostList from './PostList';
import getTags from '@/utils/getMdxTags';

export default function TagsAndPost() {
   const tags: unknown[] = getTags;  // unknown 타입 사용
   console.log(tags);

   // 블로그 목록 가져오는데 태그 기능 해야함
    return (
        <div className={styles.wrap}>
            <p className={styles.header}>📌Tags</p>
            <div className={styles.container}>
                <div className={styles.scroll}>
                    <div className={styles.margin_container}></div>
                    {
                        (tags as ReactNode[]).map((tag, i) => (
                            <div className={styles.tag} key={i}>{tag}</div>
                        ))
                    }
                </div>
            </div>
            <PostList />
        </div>
    );
}

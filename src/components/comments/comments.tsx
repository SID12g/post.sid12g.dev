"use client";

import styles from "@/components/comments/comments.module.css";
import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <div className={styles.container}>
      <Giscus
        id="comments"
        repo="sid12g/post.sid12g.dev"
        repoId="R_kgDOLOtTbg"
        category="Blogs Comments"
        categoryId="DIC_kwDOLOtTbs4Cd2Mo"
        mapping="title"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="https://rawgit.com/krisamin/blog-comment/main/theme.css"
        lang="ko"
        loading="lazy"
      />
    </div>
  );
}

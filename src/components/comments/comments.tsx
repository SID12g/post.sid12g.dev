"use client";

import styles from "@/components/comments/comments.module.css";
import Giscus from "@giscus/react";
import { useEffect, useState } from "react";

export default function Comments() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "noborder_gray" : "light");
  }, []);

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
        theme={theme}
        lang="ko"
        loading="lazy"
      />
    </div>
  );
}

"use client";
import Giscus from "@giscus/react";

export default function Comments({ theme }: { theme: any }) {
  return (
    <div
      style={{
        width: "86%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "7%",
      }}
    >
      <Giscus
        id="comments"
        repo="sid12g/sid12g-blog"
        repoId="R_kgDOKwpObA"
        category="Blogs Comments"
        categoryId="DIC_kwDOKwpObM4CboCB"
        mapping="title"
        term="Welcome to @giscus/react component!"
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

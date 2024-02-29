import styles from "@/components/post/post.module.css";
import Image from "next/image";
import Next from "@/../public/next.png";
import Date from "../date/date";
import Tag from "../tag/tag";

export default function Post() {
  return (
    <div>
      <Image
        className={styles.image}
        src={Next}
        alt="Thumbnail"
        width={480}
        height={270}
      />
      <h2 className={styles.title}>NEXT.JS 14 업데이트 살펴보기</h2>
      <p className={styles.description}>
        13 버전과 비교하며 서버기능 살펴보자!
      </p>
      <div className={styles.info}>
        <Date date="2024-01-29" />
        <Tag border="black" background="black" color="white" tag="NEXT" />
      </div>
    </div>
  );
}

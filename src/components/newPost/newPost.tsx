import styles from "@/components/newPost/newPost.module.css";
import Image from "next/image";
import Next from "@/../public/next.png";
import arrow from "@/../public/icons/arrow.svg";
import Link from "next/link";

export default function NewPost() {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href="posts/a">
        <div className={styles.info}>
          <div className={styles.tag}>NEXT</div>
          <div className={styles.arrow}>
            <Image
              className={styles.icon}
              src={arrow}
              alt="arrow"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.textWrap}>
            <p className={styles.description}>
              13 버전과 비교하며 서버기능 살펴보자!
            </p>
            <h1 className={styles.title}>NEXT.JS 14 업데이트 살펴보기</h1>
          </div>
          <Image className={styles.image} src={Next} alt="new post" />
        </div>
      </Link>
    </div>
  );
}

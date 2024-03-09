import styles from "../../styles/SayHello.module.css";
import information from "../../../public/home/information_icon.svg";
import Image from "next/image";
import Link from "next/link";
import fire from "@/../public/fire.svg";

export default function SayHello() {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Image className={styles.icon} src={fire} alt="fire icon" />
          <p className={styles.text}>블로그가 이전되었습니다!</p>
        </div>
        <Link className={styles.link} href="https://post.sid12g.dev">
          자세히보기 →
        </Link>
      </div>
      <p className={styles.header2}>
        저의 블로그에 오신걸 환영합니다
        <Link href="/sitemap.xml">👋</Link>
      </p>
      <div className={styles.container2}>
        <Image
          src={information}
          className={styles.icon}
          alt="information_icon"
        />
        <p className={styles.content}>
          조성민의 블로그에 방문해 주셔서 감사합니다! 저는{" "}
          <Link href="https://nextjs.org/">Next.js</Link>와{" "}
          <Link href="https://reactnative.dev/">React Native</Link>에 관심이
          있습니다. 저의 포스트에서 많은 정보를 얻어가시면 좋겠습니다.🐱
        </p>
      </div>
    </div>
  );
}

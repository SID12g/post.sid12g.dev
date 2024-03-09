import styles from "@/components/alarm/alarm.module.css";
import Image from "next/image";
import fire from "@/../public/icons/fire.svg";
import Link from "next/link";
export default function Alarm() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image className={styles.icon} src={fire} alt="fire icon" />
        <p className={styles.text}>
          안녕하세요~ 블로그를 리뉴얼 하였습니다. 많은 관심 부탁드립니다.
        </p>
      </div>
      <Link
        className={styles.link}
        href={"https://github.com/sid12g/post.sid12g.dev"}
      >
        자세히보기 →
      </Link>
    </div>
  );
}

import styles from "@/components/footer/footer.module.css";
import Image from "next/image";
import Link from "next/link";
import at from "@/../public/icons/at.svg";
import github from "@/../public/icons/github.svg";
import instagram from "@/../public/icons/instagram.svg";
import feed from "@/../public/icons/feed.svg";

export default function Footer() {
  var year = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <p className={styles.copyright}>
        Copyright ⓒ {year} sid12g All rights reserved.
      </p>
      <div className={styles.iconWrap}>
        <Link className={styles.link} href="mailto:ad@sid12g.dev">
          <Image className={styles.icon} src={at} alt="at" />
        </Link>
        <Link className={styles.link} href="https://github.com/sid12g">
          <Image className={styles.icon} src={github} alt="github" />
        </Link>
        <Link className={styles.link} href="https://instagram.com/clwm_222">
          <Image className={styles.icon} src={instagram} alt="instagram" />
        </Link>
        <Link className={styles.link} href="/feed.xml">
          <Image className={styles.icon} src={feed} alt="feed" />
        </Link>
      </div>
    </div>
  );
}

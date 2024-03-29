import styles from "@/components/navbar/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import hash from "@/../public/icons/hash.svg";
import cat from "@/../public/images/cat.svg";
export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        <Image
          className={styles.logoImage}
          src={cat}
          alt="logo"
          width={24}
          height={24}
        />
        <p className={styles.logoText} style={{ margin: 0 }}>
          SIIID
        </p>
      </Link>
      <div className={styles.buttonWrap}>
        <Link className={styles.link} href="https://sid12g.dev">
          <p className={styles.about}>About</p>
        </Link>
        <Link className={styles.button} href="/tags/all-posts">
          <Image
            className={styles.tags}
            src={hash}
            alt="hash"
            width={16}
            height={16}
          />
        </Link>
      </div>
    </div>
  );
}

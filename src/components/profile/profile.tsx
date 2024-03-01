import styles from "@/components/profile/profile.module.css";
import cat from "@/../public/images/cat.svg";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div className={styles.container}>
      <div style={{ width: 40 }} />
      <Image
        className={styles.image}
        src={cat}
        alt="cat"
        width={128}
        height={128}
      />
      <p className={styles.name}>CHO SUNG MIN</p>
      <Link className={styles.button} href="mailto:sid12g@naver.com">
        <p className={styles.email}>sid12g@naver.com</p>
      </Link>
    </div>
  );
}

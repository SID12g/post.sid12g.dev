import styles from "@/components/navbar/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import hash from "@/../public/icons/hash.svg";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        <p>SIIID</p>
      </Link>
      <Link className={styles.button} href="/tags/all">
        <Image
          className={styles.tags}
          src={hash}
          alt="hash"
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
}

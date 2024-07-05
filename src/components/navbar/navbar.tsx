"use client";

import styles from "@/components/navbar/navbar.module.css";
import Image from "next/image";
import logo from "@/../public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname().split("/")[1];
  return (
    <nav className={styles.navbar}>
      <Link
        href={pathname === "article" ? "/article" : "/tech"}
        className={styles.logo}
      >
        <Image className={styles.logo_image} src={logo} alt="logo" />
        <p className={styles.logo_text}>sead post</p>
      </Link>
      <div>
        <Button href="https://sid12g.dev" content="about" />
        <Button href="/tech" content="tech" />
        <Button href="/article" content="article" />
      </div>
    </nav>
  );
}

function Button({ href, content }: { href: string; content: string }) {
  const pathname = usePathname().split("/")[1];
  return (
    <Link
      className={content === pathname ? styles.button_selected : styles.button}
      href={href}
    >
      {content}
    </Link>
  );
}

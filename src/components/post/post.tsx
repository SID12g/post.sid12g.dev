import styles from "@/components/post/post.module.css";
import Image from "next/image";
import Next from "@/../public/next.png";
import Date from "../date/date";
import Tag from "../tag/tag";
import Link from "next/link";

export default function Post({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: string;
}) {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href="/posts/a">
        <Image className={styles.image} src={Next} alt="Thumbnail" />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.info}>
          <Date date={date} />
          <Tag border="black" background="black" color="white" tag="NEXT" />
        </div>
      </Link>
    </div>
  );
}

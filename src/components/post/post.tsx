import styles from "@/components/post/post.module.css";
import Image from "next/image";
import Next from "@/../public/next.png";
import Date from "../date/date";
import Tag from "../tag/tag";
import Link from "next/link";
import { tags } from "@/app/data/tags";

export default function Post({
  title,
  description,
  date,
  tag,
}: {
  title: string;
  description: string;
  date: string;
  tag: string;
}) {
  function tagInfo() {
    // console.log("tag", tag);
    return tags.find((tags) => tags.tag == tag);
  }
  // console.log(tagInfo());
  return (
    <div className={styles.container}>
      <Link className={styles.link} href="/posts/a">
        <Image className={styles.image} src={Next} alt="Thumbnail" />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.info}>
          <Date date={date} />
          <Tag
            border={tagInfo()?.border || "black"}
            background={tagInfo()?.background || "black"}
            color={tagInfo()?.color || "white"}
            tag={tag}
          />
        </div>
      </Link>
    </div>
  );
}

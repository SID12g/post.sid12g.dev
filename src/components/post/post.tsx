import styles from "@/components/post/post.module.css";
import Image from "next/image";
import Date from "../date/date";
import Tag from "../tag/tag";
import Link from "next/link";
import { tags } from "@/app/data/tags";

export default function Post({
  title,
  description,
  date,
  image,
  tag,
  slug,
}: {
  title: string;
  description: string;
  date: string;
  image: string;
  tag: string;
  slug: string;
}) {
  function tagInfo() {
    // console.log("tag", tag);
    return tags.find((tags) => tags.tag == tag);
  }
  // console.log(tagInfo());
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={"/posts/" + slug}>
        <Image
          className={styles.image}
          src={image}
          alt="Thumbnail"
          width={1920}
          height={1080}
        />
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

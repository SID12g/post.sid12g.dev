import styles from "@/components/post/post.module.css";
import Image from "next/image";
import Date from "../date/date";
import Tag from "../tag/tag";
import Link from "next/link";
import { tagStyles } from "@/app/styles/tagStlye";

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
  function tagStyle() {
    return tagStyles.find((style) => style.tag == tag);
  }
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
            border={tagStyle()?.border || "#868B94"}
            background={tagStyle()?.background || "#868B94"}
            color={tagStyle()?.color || "black"}
            tag={tag}
          />
        </div>
      </Link>
    </div>
  );
}

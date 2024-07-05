import styles from "@/components/posts/posts.module.css";
import { articleContents, techContents } from "@/utils/getPosts";
import { articleTags, techTags } from "@/utils/getTags";
import Image from "next/image";
import Link from "next/link";

export default function Posts({
  location,
  nowTag,
}: {
  location: string;
  nowTag: string;
}) {
  const contents =
    location === "tech"
      ? nowTag === ""
        ? techContents
        : techContents.filter(
            (content) =>
              content.meta.tag ===
              techTags.filter((tag) => tag.link === nowTag)[0].tag
          )
      : nowTag === ""
      ? articleContents
      : articleContents.filter(
          (content) =>
            content.meta.tag ===
            articleTags.filter((tag) => tag.link === nowTag)[0].tag
        );

  return (
    <div className={styles.posts}>
      {contents.map((post, index) => (
        <Post
          image={post.meta.image}
          title={post.meta.title}
          description={post.meta.description}
          date={post.meta.date}
          tag={post.meta.tag}
          link={post.link}
          location={location}
          key={index}
        />
      ))}
    </div>
  );
}

function Post({
  image,
  title,
  description,
  date,
  tag,
  link,
  location,
}: {
  image: string;
  title: string;
  description: string;
  date: string;
  tag: string;
  link: string;
  location: string;
}) {
  return (
    <div className={styles.post}>
      <Link className={styles.link} href={"/" + location + "/posts/" + link}>
        <div className={styles.image_wrap}>
          <Image
            className={styles.image}
            src={image}
            alt="thumbnail"
            width={1080}
            height={720}
          />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.information}>
          {date} • {tag}
        </p>
      </Link>
    </div>
  );
}

import styles from "@/components/newPost/newPost.module.css";
import Image from "next/image";
import arrow from "@/../public/icons/arrow.svg";
import Link from "next/link";
import posts from "@/utils/getPosts";
import none from "@/../public/images/404.png";

export default function NewPost() {
  const newPost = posts[0] || {
    meta: {
      title: "아직 포스트가 없습니다.",
      date: "0000-00-00",
      description: "아직 포스트가 없습니다.",
      image: none,
      tag: "NONE",
    },
    slug: "/not-found",
  };
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={"/posts/" + newPost.slug}>
        <div className={styles.info}>
          <div className={styles.tag}>{newPost.meta.tag}</div>
          <div className={styles.arrow}>
            <Image
              className={styles.icon}
              src={arrow}
              alt="arrow"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.textWrap}>
            <p className={styles.description}>{newPost.meta.description}</p>
            <h1 className={styles.title}>{newPost.meta.title}</h1>
          </div>
          <Image
            className={styles.image}
            src={newPost.meta.image}
            alt="new post thumbnail"
            width={1920}
            height={1080}
          />
        </div>
      </Link>
    </div>
  );
}

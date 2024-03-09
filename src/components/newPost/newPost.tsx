import styles from "@/components/newPost/newPost.module.css";
import Image from "next/image";
import arrow from "@/../public/icons/arrow.svg";
import Link from "next/link";
import posts from "@/utils/getPosts";

export default function NewPost() {
  const newPost = posts[0];
  console.log(newPost);
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

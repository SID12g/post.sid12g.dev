import styles from "@/components/background/background.module.css";
import Image from "next/image";
import { imageData } from "@/utils/data";
import Link from "next/link";

export default function Background({ location }: { location: string }) {
  const randomNum = Math.floor(Math.random() * 58);

  return (
    <Link href={imageData[randomNum].links.html} className={styles.background}>
      <Image
        priority={true}
        className={styles.background_image}
        src={imageData[randomNum].urls.full}
        width={1100}
        height={400}
        alt="background"
      />
      <div className={styles.message_wrap}>
        <p className={styles.message}>
          인생의 정답이 없다는 말이 오답을 적어도 된다는 뜻은 아닐테니
        </p>
        <p className={styles.message_author}>아리안 시로네</p>
      </div>
    </Link>
  );
}

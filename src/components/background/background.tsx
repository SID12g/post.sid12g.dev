import styles from "@/components/background/background.module.css";
import Image from "next/image";
import background from "@/../public/background.jpg";

export default function Background({ location }: { location: string }) {
  return (
    <div className={styles.background}>
      <Image
        className={styles.background_image}
        src={background}
        width={2160}
        height={1440}
        alt="background"
      />
      <div className={styles.message_wrap}>
        <p className={styles.message}>
          사실 명언이란, 힘있는 자의 허세일 뿐이다.
        </p>
        <p className={styles.message_author}>문석호</p>
      </div>
    </div>
  );
}

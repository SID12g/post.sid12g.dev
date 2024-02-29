import styles from "@/components/date/date.module.css";

export default function Date({ date }: { date: string }) {
  return <div className={styles.date}>{date}</div>;
}

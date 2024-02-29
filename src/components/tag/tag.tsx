import styles from "@/components/tag/tag.module.css";

export default function Tag({
  border,
  background,
  color,
  tag,
}: {
  border: string;
  background: string;
  color: string;
  tag: string;
}) {
  const style = {
    border: `1px ${border} solid`,
    backgroundColor: `${background}`,
    color: `${color}`,
  };
  return (
    <div className={styles.tag} style={style}>
      {tag}
    </div>
  );
}

import styles from "@/components/footer/footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      Copyright ⓒ {year} sid12g All rights reserved.
    </footer>
  );
}

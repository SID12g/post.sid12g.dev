import styles from '../../styles/Tags.module.css'
export default function Tags() {
    return (
        <div className={styles.wrap}>
            <p className={styles.header}>📌Tags</p>
            <div className={styles.container}>
                <div className={styles.scroll}>
                    <div className={styles.tag}>Next</div>
                    <div className={styles.tag}>React</div>
                    <div className={styles.tag}>Computer System</div>
                    <div className={styles.tag}>Flutter</div>
                    <div className={styles.tag}>React Native</div>
                    <div className={styles.tag}>It</div>
                    <div className={styles.tag}>Algorithm</div>
                </div>
            </div>
        </div>
    )
}
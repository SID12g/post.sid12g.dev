import { blogs } from '@/utils/getMdxTags'
import styles from '../../styles/Tags.module.css'

export default function Tags() {
   const k = blogs
//    console.log(k)
   //블로그 목록 가져오는데 태그 기능 해야함
    return (
        <div className={styles.wrap}>
            <p className={styles.header}>📌Tags</p>
            <div className={styles.container}>
                <div className={styles.scroll}>
                    <div className={styles.margin_container}></div>
                    <div className={styles.tag}>Next</div>
                    <div className={styles.tag}>React</div>
                    <div className={styles.tag}>Computer System</div>
                    <div className={styles.tag}>Flutter</div>
                    <div className={styles.tag}>React Native</div>
                    <div className={styles.tag}>It</div>
                    <div className={styles.tag}>Algorithm</div>
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
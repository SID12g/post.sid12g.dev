import Link from "next/link"
import styles from "../styles/Copyright.module.css"

export default function Copyright() {
    var year = new Date().getFullYear()
    return (
        <div>
            <p className={styles.text}>Copyright ⓒ {year} <Link href='https://github.com/SID12g' className={styles.github_link}>sid12g</Link> All rights reserved</p>
        </div>
    )
}
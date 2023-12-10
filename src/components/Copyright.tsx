import styles from "../styles/Copyright.module.css"

export default function Copyright() {
    var year = new Date().getFullYear()
    return (
        <div>
            <p className={styles.text}>Copyright ⓒ {year} sid12g All rights reserved</p>
        </div>
    )
}
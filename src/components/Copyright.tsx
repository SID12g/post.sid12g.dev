import styles from "../styles/Copyright.module.css"

export default function Copyright() {
    var year = new Date().getFullYear()
    return (
        <div>
            <p className={styles.text}>ⓒ {year} 조성민 powered by sid12g.dev</p>
        </div>
    )
}
import Link from "next/link"
import styles from "../styles/Copyright.module.css"
import { cookies } from 'next/headers'

export default function Copyright() {
    let cookie = cookies().get('mode')
    var year = new Date().getFullYear()
    return (
        <div>
            <p className={styles.text}>Copyright ⓒ {year} <Link href='https://github.com/SID12g' className={styles.github_link} style={cookie != undefined && cookie.value == 'light' ? {color: 'black'} : {color: 'white'}}>sid12g</Link> All rights reserved</p>
        </div>
    )
}
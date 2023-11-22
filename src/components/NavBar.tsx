import styles from '../styles/NavBar.module.css'
import Image from "next/image";
import Link from "next/link";
import instagram from "../../public/navbar/instagram_icon.svg"
import github from "../../public/navbar/github_icon.svg"
import sun from "../../public/navbar/sun_icon.svg"

export default function NavBar(){
    return(
        <div className={styles.nav_wrap}>
            <Link href="/"  className={styles.logo}><p>SMIN</p></Link>
            <div className={styles.btn_wrap}>
                <Link href="/" className={styles.button}><p>about me</p></Link>
                <Link href="https://www.instagram.com/clwm_222"><Image className={styles.icon} src={instagram} alt="icon"/></Link>
                <Link href="https://github.com/SID12g"><Image className={styles.icon} src={github} alt="icon"/></Link>
                <div><Image className={styles.mode} src={sun} alt="icon"/></div>
            </div>
        </div>
    )
}
import styles from '../styles/NavBar.module.css'
import Image from "next/image";
import Link from "next/link";
import instagram from "../../public/navbar/instagram_icon.svg"
import github from "../../public/navbar/github_icon.svg"
import DarkMode from './DarkMode';


export default function NavBar(){
    return(
        <div className={styles.nav_wrap}>
            <Link href="/"  className={styles.logo}><p>SMIN</p></Link>
            <div className={styles.btn_wrap}>
                <Link href="/" className={styles.button}><p>about me</p></Link>
                <Link href="https://www.instagram.com/clwm_222" className={styles.icon_wrap}><Image className={styles.icon} src={instagram} alt="icon"/></Link>
                <Link href="https://github.com/SID12g" className={styles.icon_wrap}><Image className={styles.icon} src={github} alt="icon"/></Link>
                <DarkMode />
            </div>
        </div>
    )
}
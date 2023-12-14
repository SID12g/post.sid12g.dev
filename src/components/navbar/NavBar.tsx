'use client'
import styles from '../../styles/NavBar.module.css'
import Image from "next/image";
import Link from "next/link";
import instagram from "../../../public/navbar/instagram_icon.svg"
import github from "../../../public/navbar/github_icon.svg"
import instagram_dark from "../../../public/navbar/dark/instagram_icon.svg"
import github_dark from "../../../public/navbar/dark/github_icon.svg"
import sun from "../../../public/navbar/sun_icon.svg"
import moon from "../../../public/navbar/dark/moon_icon.svg"
import { useLightMode } from './NowModeIsLight'


export default function NavBar(){
    const { lightMode, changeMode } = useLightMode();
    return(
        <div className={styles.nav_wrap} style={lightMode ? {} : {backgroundColor:'black'}}>
            <Link href="/"  className={styles.logo} style={lightMode ? {} : {color:'white'}}><p>SIIID</p></Link>
            <div className={styles.btn_wrap}>
                <Link href="/" className={styles.button} style={lightMode ? {} : {color:'white'}}><p>about me</p></Link>
                <Link href="https://www.instagram.com/clwm_222" className={lightMode ? styles.icon_wrap : styles.icon_wrap_dark}><Image className={styles.icon} src={lightMode ? instagram : instagram_dark} alt="icon"/></Link>
                <Link href="https://github.com/SID12g" className={lightMode ? styles.icon_wrap : styles.icon_wrap_dark}><Image className={styles.icon} src={lightMode ? github : github_dark} alt="icon"/></Link>
                <div className={lightMode ? styles.icon_wrap : styles.icon_wrap_dark} onClick={changeMode}><Image className={styles.mode} src={lightMode ? sun : moon} alt="icon"/></div>
            </div>
        </div>
    )
}
'use client'
import styles from '../styles/NavBar.module.css'
import sun from "../../public/navbar/sun_icon.svg"
import Image from "next/image";

export default function DarkMode(){
    function ChangeMode(){
        alert('다크모드는 준비 중에 있습니다!')
    }
    return(
        <div className={styles.icon_wrap} onClick={ChangeMode}><Image className={styles.mode} src={sun} alt="icon"/></div>
    )
}
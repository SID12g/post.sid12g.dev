import styles from '../../styles/NavBar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import instagram from '../../../public/navbar/instagram_icon.svg';
import github from '../../../public/navbar/github_icon.svg';
import instagram_dark from '../../../public/navbar/dark/instagram_icon.svg';
import github_dark from '../../../public/navbar/dark/github_icon.svg';
import sun from '../../../public/navbar/sun_icon.svg';
import moon from '../../../public/navbar/dark/moon_icon.svg';
import { cookies } from 'next/headers'
import {ChangeDarkMode} from './ChangeDarkMode';

export default function NavBar() {
  let cookie = cookies().get('mode')
  return (
    <div className={styles.nav_wrap} style={cookie != undefined && cookie.value == 'dark' ? { backgroundColor: 'black' }: {}}>
      <Link href="/" className={styles.logo} style={cookie != undefined && cookie.value == 'dark' ? { color: 'white' } : {}}>
        <p>SIIID</p>
      </Link>
      <div className={styles.btn_wrap}>
        <Link href="/" className={styles.button} style={cookie != undefined && cookie.value == 'dark' ? { color: 'white' } : {}}>
          <p>about me</p>
        </Link>
        <Link
          href="https://www.instagram.com/clwm_222"
          className={cookie != undefined && cookie.value == 'dark' ? styles.icon_wrap_dark : styles.icon_wrap}
        >
          <Image className={styles.icon} src={cookie != undefined && cookie.value == 'dark' ? instagram_dark : instagram} alt="icon" />
        </Link>
        <Link href="https://github.com/SID12g" className={cookie != undefined && cookie.value == 'dark' ? styles.icon_wrap_dark : styles.icon_wrap}>
          <Image className={styles.icon} src={cookie != undefined && cookie.value == 'dark' ? github_dark : github} alt="icon" />
        </Link>
        <div className={cookie != undefined && cookie.value == 'dark' ? styles.icon_wrap_dark : styles.icon_wrap} onClick={ChangeDarkMode}>
          <Image className={styles.mode} src={cookie != undefined && cookie.value == 'dark' ? moon: sun } alt="icon" />
        </div>
      </div>
    </div>
  );
}

import styles from '../../styles/SayHello.module.css'
import information from '../../../public/home/information_icon.svg'
import Image from 'next/image'
export default function SayHello() {
    return (
        <div className={styles.wrap}>
            <p className={styles.header}>저의 블로그에 오신걸 환영합니다👋</p>
            <div className={styles.container}>
                <Image src={information} className={styles.icon} alt="information_icon" />
                <p className={styles.content}>조성민의 블로그에 방문 주셔서 감사합니다! 저는 Next.js와 React Native에 관심이 있습니다. 저의 포스트에서 많은 정보를 얻어가시면 좋겠습니다.🐱
                </p>
            </div>
        </div>
    )
}
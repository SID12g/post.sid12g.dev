import styles from '../../styles/PostList.module.css'
import next_test from '../../../public/next_test.png'
import Image from 'next/image'
import Link from 'next/link'

export default function PostList() {
    return (
        <div className={styles.wrap}>
            <p className={styles.header}>📝All Posts (31)</p>
            <Link href="" className={styles.link}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <p className={styles.date}>2023년 11월 19일 (일요일)</p>
                        <p className={styles.title}>Next.js 13.4는 어떤 기능이 추가되었을까? 나는 그것이 진실로 궁금합니다!!</p>
                        <p className={styles.description}>이전 버전의 Next와 비교하기</p>
                        <div className={styles.tag}>Next</div>
                    </div>
                    <div className={styles.img_wrap}>
                        <Image src={next_test} className={styles.image} alt='preview' />
                    </div>
                </div>
            </Link>
        </div>
    )
}
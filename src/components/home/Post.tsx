import styles from '../../styles/Post.module.css'
import Image from 'next/image'
import Link from 'next/link'
interface PostProps {
    link: string;
    date: string;
    title: string;
    description: string;
    image: string;
    tag: string;
}
export default function Post({ link, date, title, description, image, tag }: PostProps) {
    let mode;
    if (typeof document !== 'undefined') {
        const cookieValue = ('; ' + document.cookie).split('; mode=');
        const lastPart = cookieValue.length > 1 ? cookieValue.pop() : '';
        mode = lastPart ? lastPart.split(';')[0] : '';
    }
    return (
        <div>
            <div className={styles.margin_container}></div>
            <Link href={link} className={styles.link}>
                <div className={mode == 'dark' ? styles.content_dark : styles.content}>
                    <div className={styles.text}>
                        <p className={styles.date}>{date}</p>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.description}>{description}</p>
                        <div className={styles.tag}>{tag}</div>
                    </div>
                    <div className={styles.img_wrap}>
                        <Image src={image} className={styles.image} alt='preview' width={1920} height={1080} />
                    </div>
                </div>
            </Link>
        </div>
    )
}
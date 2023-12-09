'use client'
import styles from '../../styles/CopyButton.module.css'
import copy_icon from '../../../public/copy_icon.svg'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function CopyButton(){
    const router = usePathname()
    function copyPath(){
        window.navigator.clipboard.writeText(`https://blog.sid12g.dev`+router).then(()=>{
            alert('링크가 복사되었습니다!')
        })
    }
    return(
        <div className={styles.share_wrap}>
                <div className={styles.share_container} onClick={copyPath}>
                    <Image className={styles.share_icon} src={copy_icon} alt='copy icon' />
                    <p className={styles.share_text}>포스트 공유하기</p>
                </div>
            </div>
    )
}
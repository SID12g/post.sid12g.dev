'use client'
import styles from '../../styles/CopyButton.module.css'
import copy_icon from '../../../public/copy_icon.svg'
import Image from 'next/image';
export default function CopyButton(){
    
    return(
        <div className={styles.share_wrap}>
                <div className={styles.share_container}>
                    <Image className={styles.share_icon} src={copy_icon} alt='copy icon' />
                    <p className={styles.share_text}>포스트 공유하기</p>
                </div>
            </div>
    )
}
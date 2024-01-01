'use client'
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Tags.module.css';
import { useRouter, useSearchParams } from 'next/navigation';

function Tags({ tags, mode }: { tags: unknown[], mode: any }) {
    const [nowTag, setNowTag] = useState('none');
    const router = useRouter()
    const params = useSearchParams()
    const nowPath = params.get('tag')
    useEffect(() => {
        if (nowPath == null) {
            setNowTag('none')
        } else {
            setNowTag(nowPath)
        }
    }, [nowPath])
    function clickTag(tag: string) {
        if (nowTag != tag) {
            setNowTag(tag)
            router.push(`/?tag=${tag}`)
        } else {
            setNowTag('none')
            router.push(`/`)
        }
    }
    


    //// 다크모드 후 새로고침 시 태그랑 포스트가 안됨 이거 고치고, 다크모드 누르면 새로고침 되게

    

    return (
        <div className={styles.wrap}>
            <p className={styles.header}>📌Tags</p>
            <div className={mode.value == 'dark' ? styles.container_dark : styles.container}>
                <div className={styles.scroll}>
                    <div className={styles.margin_container}></div>
                    {
                        (tags as string[]).map((tag, i) => (
                            <div onClick={() => clickTag(tag)} className={nowTag === tag[0] ? styles.now_tag : styles.tag} key={i}>{tag}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export { Tags }
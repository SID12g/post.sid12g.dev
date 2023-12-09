'use client'
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Tags.module.css';
import { useRouter, useSearchParams } from 'next/navigation';

var getPath:string|null = null
function Tags({ tags }: { tags: unknown[] }) {
    const [nowTag, setNowTag] = useState('none');
    const router = useRouter()
    const params = useSearchParams()
    const nowPath = params.get('tag')
    useEffect(() => {
        getPath = nowPath
        console.log(getPath)
        if(nowPath == null) {
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
    return (
        <div className={styles.wrap}>
            <p className={styles.header}>📌Tags</p>
            <div className={styles.container}>
                <div className={styles.scroll}>
                    <div className={styles.margin_container}></div>
                    {
                        (tags as string[]).map((tag, i) => (
                            <div onClick={() => clickTag(tag)} className={nowTag === tag ? styles.now_tag : styles.tag} key={i}>{tag}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export { Tags }
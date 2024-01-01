'use client'
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Tags.module.css';
import { useRouter, useSearchParams } from 'next/navigation';


function Tags({ tags }: { tags: unknown[] }) {
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


    let mode;

    if (typeof document !== 'undefined') {
        const cookieValue = ('; ' + document.cookie).split('; mode=');
        const lastPart = cookieValue.length > 1 ? cookieValue.pop() : '';
        mode = lastPart ? lastPart.split(';')[0] : '';
    }





    //// 다크모드 후 새로고침 시 태그랑 포스트가 안됨 이거 고치고, 다크모드 누르면 새로고침 되게

    console.log(mode)

    return (
        <div className={styles.wrap}>
            <p className={styles.header}>📌Tags</p>
            <div className={mode == 'dark' ? styles.container_dark : styles.container}>
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
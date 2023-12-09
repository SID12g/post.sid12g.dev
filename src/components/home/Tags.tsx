'use client'
import React, { useState } from 'react';
import styles from '../../styles/Tags.module.css';

let selectedNowTag: string = 'none';

function Tags({ tags }: { tags: unknown[] }) {
    const [nowTag, setNowTag] = useState('none');
    function clickTag(tag:string){
        if(nowTag != tag) {
            setNowTag(tag)
        } else {
            setNowTag('none')
        }
    }

    selectedNowTag = nowTag
    console.log(`tags : ${selectedNowTag}`)
    return (
        <div className={styles.wrap}>
            <p className={styles.header}>📌Tags</p>
            <div className={styles.container}>
                <div className={styles.scroll}>
                    <div className={styles.margin_container}></div>
                    {
                        (tags as string[]).map((tag, i) => (
                            <div onClick={()=>clickTag(tag)} className={nowTag === tag ? styles.now_tag : styles.tag} key={i}>{tag}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export { Tags, selectedNowTag }
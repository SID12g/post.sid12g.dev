'use client'

import styles from '@/styles/ProgressBar.module.css'
import { useState, useEffect } from 'react';
export default function ProgressBar() {
    const [position, setPosition] = useState(window.scrollY);
    const [pageHeight, setPageHeight] = useState(document.documentElement.scrollHeight - innerHeight);

    function onScroll() {
        setPosition(window.scrollY);
    }

    useEffect(() => {
        const updatePageHeight = () => {
            setPageHeight(document.documentElement.scrollHeight - innerHeight);
        };

        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', updatePageHeight);

        updatePageHeight();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', updatePageHeight);
        };
        
    }, []);
    
    console.log(`position : ${position}`)
    console.log(`pageHeight : ${pageHeight}`)
    const HeightStatus = (position / pageHeight) * 100;
    
    return (
        <div className={styles.status} style={{width:`${HeightStatus}%`}}></div>
    )
}
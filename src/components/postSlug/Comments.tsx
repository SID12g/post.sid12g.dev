'use client'
import { useEffect, useRef } from 'react';

export default function Comments() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://giscus.app/client.js';
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';

    scriptElem.setAttribute('data-repo', 'SID12g/blog.sid12g.dev');
    scriptElem.setAttribute('data-repo-id', 'R_kgDOKwpObA');
    scriptElem.setAttribute('data-category', 'Blogs Comments');
    scriptElem.setAttribute('data-category-id', 'DIC_kwDOKwpObM4CboCB');
    scriptElem.setAttribute('data-mapping', 'title');
    scriptElem.setAttribute('data-strict', '0');
    scriptElem.setAttribute('data-reactions-enabled', '1');
    scriptElem.setAttribute('data-emit-metadata', '0');
    scriptElem.setAttribute('data-input-position', 'bottom');
    scriptElem.setAttribute('data-theme', 'light');
    scriptElem.setAttribute('data-lang', 'ko');
    ref.current.appendChild(scriptElem);
  }, []);
  return <section style={{backgroundColor: 'white', width:'86%', marginLeft:'auto', marginRight:'auto', padding: '2%', borderRadius: '20px'}} ref={ref} />;
}
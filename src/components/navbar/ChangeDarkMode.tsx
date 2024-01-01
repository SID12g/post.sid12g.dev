'use client'

function ChangeDarkMode() {
    const cookieValue = ('; ' + document.cookie).split('; mode=');
    const lastPart = cookieValue.length > 1 ? cookieValue.pop() : '';
    const mode = lastPart ? lastPart.split(';')[0] : '';
    if (mode === 'light' || mode === '') {
        document.cookie = 'mode=dark; path=/';
    } else if (mode === 'dark') {
        document.cookie = 'mode=light; path=/';
    }
}

export { ChangeDarkMode }
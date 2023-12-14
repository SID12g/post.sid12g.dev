// 'use client'
import { useState, useEffect } from 'react';

const useLightMode = () => {
  const [lightMode, setLightMode] = useState(true);

  useEffect(() => {
    const userIsDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(userIsDarkMode) {
        setLightMode(false)
    }
  }, []);
  const changeMode = () => {
    setLightMode((prevMode) => !prevMode);
  };

  return {
    lightMode,
    changeMode,
  };
};

export { useLightMode };

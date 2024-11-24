"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

export const Theme = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      const theme = localStorage.getItem("theme");
      setDarkMode(theme === "dark");
    }, []);

    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme","dark")
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme","light")
      }
    }, [darkMode]);

  return (
    <div className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 cursor-pointer rounded-full p-1"
    onClick={() => setDarkMode(!darkMode)}>

    <FaMoon className={`text-gray-600 dark:text-white transition`} size={18} />

    <div className={`absolute bg-white dark:bg-gray-800 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${ darkMode ? "translate-x-8" : "translate-x-0"}`}/>

    <BsSunFill className={`ml-auto text-yellow-500 transition`} size={18} />

    </div>
  )
};

import React, { useState, useEffect } from 'react'
import LightButton from "../../assets/assets/website/light-mode-button.png"
import DarkButton from "../../assets/assets/website/dark-mode-button.png"


const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  const element = document.documentElement;  //* html element to change the dark/light mode
  

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      element.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme])
  return (
    <div className='relative'>
        <img src={LightButton} alt="" 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer 
        drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`} 
        />
        <img src={DarkButton} alt="" 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className='w-12 cursor-pointer 
        drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300' 
        />
    </div>
  )
}

export default DarkMode
import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const iconSun = darkMode ? "icon-sun-light.svg" : "icon-sun-dark.svg";
  const iconMoon = darkMode ? "icon-moon-light.svg" : "icon-moon-dark.svg";

  return (
    <div className="inline-flex gap-4 mt-[6%]">
      <img src={`/assets/${iconSun}`} alt="Light Theme Icon" />
      <label className="relative inline-block w-12 h-7 cursor-pointer">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="sr-only peer"
        />
        <span className="absolute inset-0 bg-purple rounded-[34px]"></span>
        <span className="absolute block w-5 h-5 bg-pure-white rounded-full left-1 bottom-1 transition duration-300 ease-in-out transform peer-checked:translate-x-5"></span>
      </label>
      <img src={`/assets/${iconMoon}`} alt="Dark Theme Icon" />
    </div>
  );
};

export default ThemeSwitcher;

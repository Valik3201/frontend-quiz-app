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
    <div className="inline-flex items-center gap-2 md:gap-4 py-2.5">
      <img
        src={`/assets/${iconSun}`}
        alt="Light Theme Icon"
        className="w-4 h-4 md:w-6 md:h-6"
      />
      <label className="relative inline-block w-8 h-5 md:w-12 md:h-7 cursor-pointer">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="sr-only peer"
        />
        <span className="absolute inset-0 bg-purple rounded-[34px]"></span>
        <span className="absolute block w-3 h-3 md:w-5 md:h-5 bg-pure-white rounded-full left-1 bottom-1 transition duration-300 ease-in-out transform peer-checked:translate-x-3 md:peer-checked:translate-x-5"></span>
      </label>
      <img
        src={`/assets/${iconMoon}`}
        alt="Dark Theme Icon"
        className="w-4 h-4 md:w-6 md:h-6"
      />
    </div>
  );
};

export default ThemeSwitcher;

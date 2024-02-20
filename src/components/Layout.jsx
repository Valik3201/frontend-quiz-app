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
    <div className="inline-flex gap-4 mt-12">
      <img src={`/assets/${iconSun}`} alt="Light Theme Icon" />
      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 rounded-full ${
          darkMode ? "dark:bg-yellow-400" : "bg-gray-800"
        } ${
          darkMode ? "dark:text-gray-900" : "text-white"
        } transition-colors duration-200`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <img src={`/assets/${iconMoon}`} alt="Dark Theme Icon" />
    </div>
  );
};

export default ThemeSwitcher;

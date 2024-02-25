import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const iconSun = theme === "dark" ? "icon-sun-light.svg" : "icon-sun-dark.svg";
  const iconMoon =
    theme === "dark" ? "icon-moon-light.svg" : "icon-moon-dark.svg";

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="inline-flex items-center gap-2 md:gap-4 py-2.5">
      <img
        src={`/assets/${iconSun}`}
        alt="Light Theme Icon"
        className="w-4 h-4 md:w-6 md:h-6"
      />

      <div
        className="w-8 h-5 md:w-12 md:h-7 flex justify-start items-center bg-purple rounded-full py-2 px-1 cursor-pointer data-[theme=dark]:justify-end"
        data-theme={theme}
        onClick={toggleTheme}
      >
        <motion.div
          className="w-3 h-3 md:w-5 md:h-5  bg-pure-white rounded-full"
          layout
          transition={spring}
        />
      </div>

      <img
        src={`/assets/${iconMoon}`}
        alt="Dark Theme Icon"
        className="w-4 h-4 md:w-6 md:h-6"
      />
    </div>
  );
};

export default ThemeSwitcher;

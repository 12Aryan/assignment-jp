import { useEffect, useState } from "react";
import LightBulb from "../../icons/LightBulb";
import DarkBulb from "../../icons/DarkBulb";

const ThemeToggler = () => {
  const [mode, setMode] = useState(localStorage.getItem("theme"));
  const toggleTheme = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    setMode(isDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;

    if (userTheme === "dark" || (!userTheme && systemPrefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
    <div
      onClick={toggleTheme}
      className={`w-min ${mode === "dark" ? "bg-black" : "bg-white"}`} 
      role="button" 
      aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`} 
      
    >
      {mode === "light" ? <LightBulb /> : <DarkBulb />}
    </div>
  </>
  );
};

export default ThemeToggler;

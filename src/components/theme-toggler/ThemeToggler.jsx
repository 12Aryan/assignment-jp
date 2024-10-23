import { useEffect } from "react";
import LightBulb from "../../icons/LightBulb";
import DarkBulb from "../../icons/DarkBulb";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeGlobal } from "../../reducers/themeSlice";

const ThemeToggler = () => {
  const mode = useSelector((state) => state.toggleTheme.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    dispatch(toggleThemeGlobal(isDarkMode ? "dark" : "light"));
  };

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

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
        className={`w-min `}
        role="button"
        aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
      >
        {mode === "light" || mode === null ? <LightBulb /> : <DarkBulb />}
      </div>
    </>
  );
};

export default ThemeToggler;

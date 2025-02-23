import { useEffect, useState } from "react";
import "./App.css";
import logoDark from "/public/assets/images/logo-dark-theme.svg";
import logoLight from "/public/assets/images/logo-light-theme.svg";
import iconSun from "/public/assets/images/icon-sun.svg";
import iconMoon from "/public/assets/images/icon-moon.svg";
import CharacterCounter from "./components/CharacterCounter";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );
  const [logo, setLogo] = useState();
  const [themeIcon, setThemeIcon] = useState();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setLogo(logoDark);
      setThemeIcon(iconSun);
    } else {
      document.documentElement.classList.remove("dark");
      setLogo(logoLight);
      setThemeIcon(iconMoon);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="  bg-[url(/public/assets/images/bg-light-theme.png)]  dark:bg-[url(/public/assets/images/bg-dark-theme.png)] py-[32px] px-[225px]  dark:text-white text-black flex flex-col gap-[48px] items-center">
      <header className="flex justify-between items-center w-full">
        <img src={logo} alt="logo" />
        <button
          className={`h-[44px] w-[44px]  flex justify-center items-center rounded-[8px] cursor-pointer ${
            theme === "dark" ? " bg-Neutral-700" : "bg-Neutral-100"
          }`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <img src={themeIcon} alt="theme icon" />
        </button>
      </header>

      <h1 className="text-Neutral-100 font-bold text-[64px] tracking-[-1px] leading-[100%] max-w-[510px] text-center">
        Analyze your text in real-time.
      </h1>

      <CharacterCounter/>
    </div>
  );
}

export default App;

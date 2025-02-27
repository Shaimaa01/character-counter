import { useEffect, useState } from 'react';
import './App.css';
import logoDark from '/public/assets/images/logo-dark-theme.svg';
import logoLight from '/public/assets/images/logo-light-theme.svg';
import iconSun from '/public/assets/images/icon-sun.svg';
import iconMoon from '/public/assets/images/icon-moon.svg';
import CharacterCounter from './components/CharacterCounter';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
  );
  const [logo, setLogo] = useState();
  const [themeIcon, setThemeIcon] = useState();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty(
        '--scrollbar-thumb-color',
        '#404254'
      );
      document.documentElement.style.setProperty(
        '----placeholder-color',
        '#E4E4EF'
      );
      setLogo(logoDark);
      setThemeIcon(iconSun);
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty(
        '--scrollbar-thumb-color',
        '#FFFFFF'
      );
      document.documentElement.style.setProperty(
        '----placeholder-color',
        '#2A2B37'
      );
      setLogo(logoLight);
      setThemeIcon(iconMoon);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="  bg-[url(/public/assets/images/bg-light-theme.png)]  dark:bg-[url(/public/assets/images/bg-dark-theme.png)] pt-[32px] max-xl:pt-[16px] pb-[64px] max-sm:pb-[32px] max-xl:pb-[93px] px-[225px] max-xl:px-[32px] max-sm:px-[16px]  dark:text-white text-black flex flex-col gap-[48px] max-xl:gap-[40px] items-center">
      <header className="flex justify-between items-center w-full">
        <img
          src={logo}
          alt="logo"
          className="max-sm:w-[184.4px] max-sm:h-[30px]"
        />
        <button
          className={`h-[44px] w-[44px] max-sm:w-[32px] max-sm:h-[32px]  flex justify-center items-center rounded-[8px] cursor-pointer ${
            theme === 'dark' ? ' bg-Neutral-700' : 'bg-Neutral-100'
          }`}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <img
            src={themeIcon}
            alt="theme icon"
            className="max-sm:w-[20px] max-sm:h-[20px]"
          />
        </button>
      </header>

      <h1 className="dark:text-Neutral-100 text-Neutral-900 font-bold text-[64px] max-sm:text-[40px] tracking-[-1px] leading-[100%] max-w-[510px] max-sm:max-w-[343px] text-center">
        Analyze your text in real-time.
      </h1>

      <CharacterCounter />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    const darkModeListener = (e) => {
      setDarkModeEnabled(e.matches);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", darkModeListener);

    return () => mediaQuery.removeEventListener("change", darkModeListener);
  }, []);

  function handleThemeChange() {
    setDarkModeEnabled((prevMode) => !prevMode);
  }

  useEffect(() => {
    const root = document.documentElement;

    if (darkModeEnabled) {
      for (const [variable, value] of Object.entries(darkTheme)) {
        root.style.setProperty(variable, value);
      }
    } else {
      for (const [variable, value] of Object.entries(lightTheme)) {
        root.style.setProperty(variable, value);
      }
    }
  }, [darkModeEnabled]);

  const lightTheme = {
    "--bg-color": "white",
    "--text-color": "black",
    "--header-bg-color": "black",
    "--header-text-color": "white",
  };

  const darkTheme = {
    "--bg-color": "#282d35",
    "--text-color": "#deebf8",
    "--header-bg-color": "#21222a",
    "--header-text-color": "white",
  };

  return (
    <>
      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            onChange={handleThemeChange}
            checked={darkModeEnabled}
          />
          <div className="slider round"></div>
        </label>
      </div>
    </>
  );
}

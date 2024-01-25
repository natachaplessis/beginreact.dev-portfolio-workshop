import styles from "./ToggleThemeButton.module.css";
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";
import clsx from "clsx";
import { useTheme } from "../context/ThemeProvider";

export const ToggleThemeButton = () => {
  // Dark Mode - Exercise
  const {theme, toggleTheme} = useTheme();

  const isDark = theme==='dark';
  const isLight = theme==='light';
  

  return (
    <div className="relative p-2 overflow-hidden rounded-full border-primary">
      <MdOutlineWbSunny
        onClick={toggleTheme}
        className={clsx("relative h-6 w-6 cursor-pointer text-primary", {
          [styles.enter]: isLight,
          [styles.exit]: isDark,
        })}
      />
      {console.log(theme)}
      <MdOutlineModeNight
        onClick={toggleTheme}
        className={clsx("absolute top-2 h-6 w-6 cursor-pointer text-primary", {
          [styles.enter]: isDark,
          [styles.exit]: isLight,
        })}
      />
    </div>
  );
};

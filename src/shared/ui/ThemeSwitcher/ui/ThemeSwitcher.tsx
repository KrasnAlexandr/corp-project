import {classNames} from "shared/lib/classNames";
import cls from "./ThemeSwitcher.module.scss";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/light-mode-icon.svg';
import DarkIcon from 'shared/assets/icons/dark-mode-icon.svg';
import {AppButton, ThemeButton} from "shared/ui/AppButton/AppButton";


interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const { theme ,toggleTheme } = useTheme();

  return (
    <AppButton
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
    </AppButton>
  );
};

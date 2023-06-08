import {IThemeContext, LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {FC, PropsWithChildren, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultValue = useMemo((): IThemeContext => ({
    theme: theme,
    setTheme: setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

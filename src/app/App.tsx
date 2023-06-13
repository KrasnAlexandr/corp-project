import './styles/index.scss'
import {FC} from "react";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets";
import {useTheme} from "app/providers/ThemeProvider";


const App: FC = () => {
  const { theme ,toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;

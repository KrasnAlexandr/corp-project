import './styles/index.scss'
import {FC, Suspense} from "react";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/router";
import { Navbar, Sidebar} from "widgets";
import {useTheme} from "app/providers/ThemeProvider";


const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="Loading...">
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;

import {BrowserRouter} from "react-router-dom";
import App from "app/App";
import {ThemeProvider} from "app/providers/ThemeProvider";
import "shared/config/i18n/i18n";
import {createRoot} from "react-dom/client";

const AppWithCallbackAfterRender = () => (
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);

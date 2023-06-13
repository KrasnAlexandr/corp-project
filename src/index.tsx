import {BrowserRouter} from "react-router-dom";
import {render} from "react-dom";
import App from "app/App";
import {ThemeProvider} from "app/providers/ThemeProvider";


render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)

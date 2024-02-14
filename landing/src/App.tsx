import { ThemeProvider } from "styled-components";
import Routes from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import { theme } from "./styles/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from "styled-components";
import Routes from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import { theme } from "./styles/theme";
import { GlobalContainer } from "./App";
function App() {
  return (
    <GlobalContainer>
      <ThemeProvider theme={theme}>
        <Routes />
        <Toaster />
      </ThemeProvider>
    </GlobalContainer>
  );
}

export default App;

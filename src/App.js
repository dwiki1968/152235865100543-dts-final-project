import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./utils/theme";
import HomePage from "./containers/HomePage";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<SignIn />} />
            <Route path="/recipes/:recipeId" element={<>detail</>} />
            <Route path="*" element={<>notfound</>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

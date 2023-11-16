import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
};

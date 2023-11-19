import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NoMatch } from "./pages/NoMatch";
import { Recipe } from "./pages/Recipe";
import { Search } from "./pages/Search";
import { RecipeDashboard } from "./pages/RecipeDashboard";
import { MyCookbooks } from "./pages/MyCookbooks";
import { Login } from "./pages/Login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<Search />} />
      <Route path="/dashboard" element={<RecipeDashboard />} />
      <Route path="/mycookbooks" element={<MyCookbooks />} />
      <Route path="/recipe/:recipeID" element={<Recipe />} />
      <Route path="/*" element={<NoMatch />} />
    </Routes>
  );
};

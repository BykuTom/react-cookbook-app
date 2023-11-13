import { Route, Routes } from "react-router-dom";
import { Home } from "./src/pages/home";
import { NoMatch } from "./src/pages/NoMatch";
import { Recipe } from "./src/pages/Recipe";
import { Search } from "./src/pages/Search";
import { RecipeDashboard } from "./src/pages/RecipeDashboard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/dashboard" element={<RecipeDashboard />} />
      <Route path="/recipe/:recipeID" element={<Recipe />} />
      <Route path="/*" element={<NoMatch />} />
    </Routes>
  );
};

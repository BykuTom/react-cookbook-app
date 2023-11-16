import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NoMatch } from "./pages/NoMatch";
import { Recipe } from "./pages/Recipe";
import { Search } from "./pages/Search";
import { RecipeDashboard } from "./pages/RecipeDashboard";
<<<<<<< HEAD
import { MyRecipeList } from "./pages/MyRecipeList";
=======
import { MyCookbooks } from "./pages/MyCookbooks";
>>>>>>> 7543869291e2cc71892dc3a02ad9cce7fc7535e6

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/dashboard" element={<RecipeDashboard />} />
      <Route path="/mycookbooks" element={<MyCookbooks />} />
      <Route path="/recipe/:recipeID" element={<Recipe />} />
      <Route path="/myRecipeList" element={<MyRecipeList />} />
      <Route path="/*" element={<NoMatch />} />
    </Routes>
  );
};

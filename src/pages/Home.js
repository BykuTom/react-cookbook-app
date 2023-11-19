import { HeroBanner } from "../components/home/HeroBanner";
import { useRecipeSearch } from "../hooks/useRecipeSearch";

export const Home = () => {
  /* const query = "burgers";
  const filters = {
    cuisine: "american",
    diet: null,
    intolerances: "glutten",
    mealType: "main course",
    includeIngredients: "cheese",
    excludeIngredients: "egg",
    sort: "calories",
    sortDirection: "asc",
  };

  const { data, isLoading, error } = useRecipeSearch(query, filters);

  error && console.log(error); */

  return (
    <div className="min-w-screen min-h-screen bg-orange-50">
      <HeroBanner />
    </div>
  );
};

import { HeroBanner } from "../components/home/HeroBanner";
import { useRecipeSearch } from "../hooks/useRecipeSearch";
import { AboutUs } from "../components/home/AboutUs";


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
    <div className="bg-orange-50 w-full">
      <div className="min-w-screen min-h-screen max-w-[90rem] mx-auto">
        <HeroBanner />
        <AboutUs />
      </div>
    </div>
  );
};

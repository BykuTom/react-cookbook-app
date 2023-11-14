import { HeroBanner } from "../components/home/HeroBanner";
import { useAxios } from "../hooks/useAxios";

export const Home = () => {
  const query = "burgers";
  const filters = {
    cuisine: "american",
    diet: null, // could be something like vegan but its commented out for now.
    intolerances: "glutten",
    mealType: "main course",
    includeIngredients: "cheese",
    excludeIngredients: "egg",
    sort: "calories",
    sortDirection: "asc",
  };

  /* const { data, isLoading, error } = useAxios(query, filters);

  console.log(data);
  error && console.log(error); */

  return (
    <div className="min-w-screen min-h-screen">{/* <HeroBanner /> */}</div>
  );
};

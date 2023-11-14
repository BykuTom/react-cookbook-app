import { useEffect, useState } from "react";
import axios from "axios";

const SPOONACULAR_URL =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch";

export const useAxios = (query, filters) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        setIsLoading(true);

        try {
          const response = await axios.get(SPOONACULAR_URL, {
            headers: {
              "X-RapidAPI-Key": process.env.REACT_APP_X_RapidAPI_Key,
              "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_API_HOST,
            },
            params: {
              query: query,
              cuisine: filters.cuisine,
              /*  diet: filters.diet, */
              intolerances: filters.intolerances,
              type: filters.mealType,
              includeIngredients: filters.includeIngredients,
              excludeIngredients: filters.excludeIngredients,
              instructionsRequired: "true",
              addRecipeInformation: "true",
              sort: filters.sort,
              sortDirection: filters.sortDirection,
              number: "100",

              limitLicense: "false",
            },
          });

          /*           const response = mockSearchResponse; */

          if (response.status !== 200) {
            setError(true);
            setData();
          } else {
            setError(false);
            setData(response.data);
          }
        } catch (error) {
          setError(true);
          setData();
        }

        setIsLoading(false);
      };

      fetchData();
    }
  }, [query]);

  return {
    data,
    isLoading,
    error,
  };
};

import { useEffect, useState } from "react";
import axios from "axios";
import { mockSearchResponse } from "../assets/data/mockSearchResponse";

const SPOONACULAR_URL =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch";

export const useRecipeSearch = ([query, filters]) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        const params = {
          query: query,
          instructionsRequired: "true",
          addRecipeInformation: "true",
          number: "100",
          limitLicense: "false",
          ...(filters && {
            ...(filters.cuisine && { cuisine: filters.cuisine }),
            ...(filters.diet && { diet: filters.diet }),
            ...(filters.intolerances && { intolerances: filters.intolerances }),
            ...(filters.mealType && { type: filters.mealType }),
            ...(filters.includeIngredients && {
              includeIngredients: filters.includeIngredients,
            }),
            ...(filters.excludeIngredients && {
              excludeIngredients: filters.excludeIngredients,
            }),
            ...(filters.sort && { sort: filters.sort }),
            ...(filters.sortDirection && {
              sortDirection: filters.sortDirection,
            }),
          }),
        };
        setIsLoading(true);

        try {
          // const response = await axios.get(SPOONACULAR_URL, {
          //   headers: {
          //     "X-RapidAPI-Key": process.env.REACT_APP_X_RapidAPI_Key,
          //     "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_API_HOST,
          //   },
          //   params: params,
          // });

           const response = { status: 200, data: mockSearchResponse };

          if (response.status !== 200) {
            setError(true);
            setData();
          } else {
            setError(false);
            setData(response.data.results);
          }
        } catch (error) {
          console.log(error.message);
          setError(true);
          setData();
        }

        setIsLoading(false);
      };

      fetchData();
    }
  }, [query, filters]);

  return {
    data,
    isLoading,
    error,
  };
};

import { useState, useEffect } from "react";
import axios from "axios";

export const useRecipeById = (recipeId) => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (recipeId) {
      const fetchData = async () => {
        setIsLoading(true);

        try {
          const response = await axios.get(
            `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`,
            {
              headers: {
                "X-RapidAPI-Key": process.env.REACT_APP_X_RapidAPI_Key,
                "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_API_HOST,
              },
            }
          );
          if (response.status !== 200) {
            setError(true);
            setRecipe();
          } else {
            setError(false);
            setRecipe(response.data);
          }
        } catch (error) {
          setError(true);
          setRecipe();
        }

        setIsLoading(false);
      };

      fetchData();
    }
  }, [recipeId]);

  return {
    recipe,
    isLoading,
    error,
  };
};

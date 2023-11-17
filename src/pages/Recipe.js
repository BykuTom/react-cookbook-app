import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Recipe = () => {
  const { recipeID } = useParams();
  const location = useLocation();
  const recipe = location.state?.recipe;

  useEffect(() => {
    console.log("useEffect");
    !recipe && console.log(recipeID);
    console.log(recipe);
  }, [recipeID, recipe]);

  return <div className="text-black">{recipe?.title}</div>;
};

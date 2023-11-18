import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useRecipeById } from "../hooks/useRecipeByID";
import { BannerSlide } from "../components/home/BannerSlide";

export const Recipe = () => {
  const { recipeID } = useParams();
  const location = useLocation();
  const recipeFromState = location.state?.recipe;

  // const { recipe, isLoading, error } = useRecipeById(recipeID);

  //{recipeFromState?.title}

  return (
    <div className="w-full min-h-[calc(100vh-7rem)] bg-orange-50 p-4 pt-10">
      <BannerSlide
        title={recipeFromState.title}
        summary={recipeFromState.summary}
        image={recipeFromState.image}
        rating={5}
      />
    </div>
  );
};

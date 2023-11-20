import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecipeById } from "../hooks/useRecipeByID";
import { BannerSlide } from "../components/home/BannerSlide";
import { RecipeSteps } from "../components/RecipeSteps";

export const Recipe = () => {
  const { recipeID } = useParams();
  const location = useLocation();
  const recipeFromState = location.state?.recipe;



  const { analyzedInstructions } = recipeFromState
  const [currentTab, setCurrentTab] = useState(0)



  const handleTabChange = (index) => {
    setCurrentTab(index)
    console.log(index)
  }

  

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
      <div className="divider divider-horizontal m-6 opacity-40 "></div>
      <div className="p-1">
        <div className="w-full min-h-[2rem] mt-4 flex flex-row gap-2 justify-center items-center">
          <button className={`btn btn-warning ${currentTab === 0 && 'active'}`} onClick={() => handleTabChange(0)}>
            Cooking Steps
          </button>
          <button className={`btn btn-warning ${currentTab === 1 && 'active'}`} onClick={() => handleTabChange(1)}>
            Nutrition
          </button>
          <button className={`btn btn-warning ${currentTab === 2 && 'active'}`} onClick={() => handleTabChange(2)}>
            Taste
          </button>
        </div>
        <div className="w-full min-h-[calc(100vh-7rem)] bg-orange-50 p-4 pt-10">
          <div className="overflow-hidden bg-orange-100 py-8 md:mx-4 drop-shadow-lg rounded-md text-black">
            {currentTab === 0 && (
              <div>
                <p>Cooking Steps</p>
                {analyzedInstructions[0].steps.map((step, index) => (
                  <div className="text-black" key={index}>
                    <p>{index + 1}. {step.step}</p>
                  </div>))}
              </div>
            )}
            {currentTab === 1 && (
              <div>
                <p>Nutrition</p>
              </div>
            )}
            {currentTab === 2 && (
              <div>
                <p>Taste</p>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};


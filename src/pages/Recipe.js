import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecipeById } from "../hooks/useRecipeByID";
import { BannerSlide } from "../components/home/BannerSlide";
import { RecipeSteps } from "../components/RecipeSteps";

export const Recipe = () => {
  const { recipeID } = useParams();
  const location = useLocation();
  // const recipeFromState = location.state?.recipe; // THIS IS RECIPE FROM STATE, MOCK DATA

  const { recipe, isLoading, error } = useRecipeById(recipeID);


  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (index) => {
    setCurrentTab(index);
    console.log(index);
  };

  //Get a nutrient by its name from the list of nutrients
  const getNutrientByName = (nutrients, nutrientName) => {
    return nutrients.find((nutrient) => nutrient.name === nutrientName);
  };
  const nutrientNames = ["Calories", "Protein", "Carbohydrates", "Fat", "Sugar", "Fiber", "Iron", "Sodium"]

  console.log(recipe);

  //{recipeFromState?.title}

  return (
    <div className="w-full min-h-[calc(100vh-7rem)] bg-orange-50 p-4 pt-10">
      {recipe && (
        <BannerSlide
          title={recipe.title}
          summary={recipe.summary}
          image={recipe.image}
          rating={5}
        />
      )}
      <div className="divider divider-horizontal m-6 opacity-40 "></div>
      <div className="p-1">
        <div className="w-full min-h-[2rem] mt-4 flex flex-row gap-2 justify-center items-center">
          <button
            className={`btn btn-warning ${currentTab === 0 && "active"}`}
            onClick={() => handleTabChange(0)}
          >
            Cooking Steps
          </button>
          <button
            className={`btn btn-warning ${currentTab === 1 && "active"}`}
            onClick={() => handleTabChange(1)}
          >
            Nutrition
          </button>
          <button
            className={`btn btn-warning ${currentTab === 2 && "active"}`}
            onClick={() => handleTabChange(2)}
          >
            Ingredients
          </button>
        </div>
        <div className="w-full min-h-[calc(100vh-7rem)] bg-orange-50 p-4 pt-10">
          {recipe && (
          <div className="overflow-hidden bg-orange-100 py-8 md:m-4 drop-shadow-lg rounded-md text-black p-4 m-1">
          {currentTab === 0 && (
              <div>
                <h3 className="text-3xl pb-2">Cooking Steps:</h3>
                {recipe.analyzedInstructions[0]?.steps.map((step, index) => (
                  <div className="text-black" key={index}>
                    <p>
                      {index + 1}. {step.step}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {currentTab === 1 && (
              <div>
              <h3 className="text-3xl pb-2">Nutrition Per Serving:</h3>
              {nutrientNames.map((nutrientName, index) => {
                const nutrient = getNutrientByName(recipe.nutrition.nutrients, nutrientName);
                return nutrient && (
                  <div className="text-black p-1" key={index}>
                    <p>{nutrient.name}: {nutrient.amount.toFixed(2)}{nutrient.unit}</p>
                  </div>
                );
              })}
              </div>
            )}
            {currentTab === 2 && (
              <div>
                
            </div>
            )}
          </div>)}
        </div>
      </div>
    </div>
  );
};

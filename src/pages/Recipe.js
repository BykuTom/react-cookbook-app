import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import { useRecipeById } from "../hooks/useRecipeByID";
import { RecipeBanner } from "../components/recipe/RecipeBanner";

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
  const nutrientNames = [
    "Calories",
    "Protein",
    "Carbohydrates",
    "Fat",
    "Sugar",
    "Fiber",
    "Iron",
    "Sodium",
  ];

  console.log(recipe);

  return (
    <div className="bg-orange-50">
      <div className="w-full min-h-[calc(100vh-7rem)] max-w-[90rem] mx-auto p-4 pt-10">
        {recipe && <RecipeBanner recipe={recipe} rating={5} />}
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
                    {recipe.analyzedInstructions[0]?.steps.map(
                      (step, index) => (
                        <div className="text-black" key={index}>
                          <p className="p-1">
                            {index + 1}. {step.step}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                )}
                {currentTab === 1 && (
                  <div>
                    <h3 className="text-3xl pb-2">Nutrition Per Serving:</h3>
                    {nutrientNames.map((nutrientName, index) => {
                      const nutrient = getNutrientByName(
                        recipe.nutrition.nutrients,
                        nutrientName
                      );
                      return (
                        nutrient && (
                          <div className="text-black p-1" key={index}>
                            <p>
                              {nutrient.name}: {nutrient.amount.toFixed(2)}
                              {nutrient.unit}
                            </p>
                          </div>
                        )
                      );
                    })}
                  </div>
                )}
                {currentTab === 2 && (
                  <div>
                    <h3 className="text-3xl pb-2">Ingredients</h3>
                    {recipe.extendedIngredients?.map((ingredient, index) => (
                      <div className="text-black" key={index}>
                        <p className="p-1">
                          {index + 1}. {ingredient.original}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

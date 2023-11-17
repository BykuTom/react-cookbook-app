import { useState } from "react";
import { AddToCookbookModal } from "./AddToCookbookModal";
import { useApp } from "../../context/AppProvider";
import { useNavigate } from "react-router-dom";

export const RecipeCard = ({ recipe, variant, cookbookID }) => {
  const navigate = useNavigate();
  const { dispatch } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  let string = recipe.summary;

  if (string.length > 167) {
    string = recipe.summary.slice(0, 168) + "(...)";
  }

  return (
    <div className="card card-image-cover h-[35rem] bg-gray-50 drop-shadow-lg">
      <AddToCookbookModal
        isOpen={isOpen}
        closeModal={closeModal}
        recipe={recipe}
      />
      <img src={recipe.image} alt="" />
      <div className="card-body py-4">
        <h2 className="card-header text-black">{recipe.title}</h2>
        <p className="text-black h-[7.5rem]">{string}</p>
        <div className="card-footer">
          <button
            className="btn-warning btn mx-auto font-bold text-lg p-1"
            onClick={() => {
              console.log(recipe.id);
            }}
          >
            Start Cooking!
          </button>
          {variant ? (
            <button
              className="btn-danger btn mx-auto font-bold text-md p-1"
              type="button"
              onClick={() => {
                dispatch({
                  type: "REMOVE_RECIPE_FROM_COOKBOOK",
                  payload: {
                    cookbookID,
                    recipeID: recipe.id,
                  },
                });
              }}
            >
              Remove from Cookbook
            </button>
          ) : (
            <button
              className="btn-danger btn mx-auto font-bold text-lg p-1"
              type="button"
              onClick={openModal}
            >
              Add to Cookbook
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

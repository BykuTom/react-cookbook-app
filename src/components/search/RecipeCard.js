import { useState } from "react";
import { AddToCookbookModal } from "./AddToCookbookModal";
import { useApp } from "../../context/AppProvider";
import { useNavigate } from "react-router-dom";
import { parseToHTML } from "../../utils/utilities";
import { PleaseLoginDialog } from "../PleaseLogInDialog";

export const RecipeCard = ({ recipe, variant, cookbookID, setShowAlert }) => {
  const navigate = useNavigate();
  const { state, dispatch } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  const handleRecipeNavigate = () => {
    navigate(`/recipe/${recipe.id}`, {
      state: {
        recipe: recipe,
      },
    });
  };

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
    <div className="card w-full card-image-cover min-h-[35rem] bg-orange-50 drop-shadow-lg m-2 sm:m-0 sm:flex sm:flex-col transform hover:drop-shadow-2xl">
      <AddToCookbookModal
        isOpen={isOpen}
        closeModal={closeModal}
        recipe={recipe}
        setShowAlert={setShowAlert}
      />
      <PleaseLoginDialog
        isOpen={isLoginDialogOpen}
        setIsOpen={setIsLoginDialogOpen}
        text="Please log in in order to add a recipe to cookbook!"
      />
      {recipe.image ? (
        <img src={recipe.image} alt="" />
      ) : (
        <div className=" skeleton"></div>
      )}
      <div className="card-body py-4 sm:flex sm:flex-col sm:flex-grow">
        <div className="flex flex-row justify-between text-center">
          <h2 className="card-header text-black text-left">{recipe.title}</h2>
          <h2 className=" card-header text-black">
            {recipe.readyInMinutes} mins
          </h2>
        </div>
        <p className="text-black">{parseToHTML(string)}</p>
        <div className="card-footer flex flex-col gap-2 justify-center w-full sm:mt-auto sm:flex-row">
          <button
            className="btn-warning btn mx-auto font-bold text-lg p-1 md:w-[45%] w-full drop-shadow hover:shadow-lg text-gray-800"
            onClick={handleRecipeNavigate}
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
              className="bg-[#64d97b] btn mx-auto font-bold text-lg p-1 w-full md:w-[50%] sm:w-auto drop-shadow hover:shadow-lg text-gray-800"
              type="button"
              onClick={
                state.user
                  ? openModal
                  : () => {
                      setIsLoginDialogOpen(true);
                    }
              }
            >
              Add to Cookbook
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

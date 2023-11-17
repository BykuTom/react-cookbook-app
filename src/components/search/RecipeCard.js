import { useState } from "react";
import { AddToCookbookModal } from "./AddToCookbookModal";

export const RecipeCard = ({ recipe }) => {
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
          <button className="btn-warning btn mx-auto font-bold text-lg p-1">
            Start Cooking!
          </button>
          <button
            className="btn-danger btn mx-auto font-bold text-lg p-1"
            type="button"
            onClick={openModal} // Fixed onClick handler
          >
            Add to Recipe List
          </button>
        </div>
      </div>
    </div>
  );
};

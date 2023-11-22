import { useParams } from "react-router-dom";
import { useApp } from "../context/AppProvider";
import { averageRating, getAuthor, handleRating } from "../utils/utilities";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { RecipeCard } from "../components/search/RecipeCard";
import { ReviewDisplay } from "../components/cookbook/ReviewDisplay";
import { WriteReviewForm } from "../components/cookbook/WriteReviewForm";

export const Cookbook = () => {
  const { cookbookID } = useParams();
  const [currentTab, setCurrentTab] = useState("Recipes");
  const { state, dispatch } = useApp();
  const [rating, setRating] = useState(
    averageRating(
      state.cookbooks.filter((cookbook) => {
        return cookbook.id === cookbookID;
      })[0]
    )
  );

  const filteredCookbooks = state.cookbooks.filter((cookbook) => {
    return cookbook.id === cookbookID;
  });
  if (filteredCookbooks.length === 0) {
    return (
      <div className="bg-orange-50 text-black h-[calc(100vh-4rem)] ">
        Cookbook not found
      </div>
    );
  }

  const cookbook = filteredCookbooks[0];

  return (
    <div className="bg-orange-50">
      <div className="w-full h-[calc(100vh-4rem)] max-w-[90rem] mx-auto text-black p-2 flex flex-col gap-2">
        {cookbook && (
          <div className="p-2 bg-[#EEE0CB] rounded-lg h-fit flex flex-col gap-2">
            <div className="w-full flex flex-col sm:flex-row gap-2">
              <h1 className="text-2xl font-bold">{cookbook.name}</h1>
              <div className="flex flex-row items-center text-xs">
                <Rating
                  size={36}
                  className="flex flex-row "
                  transition
                  allowFraction
                  readonly={!state.user}
                  initialValue={rating}
                  onClick={(event) => {
                    handleRating(event, state, dispatch, cookbook, setRating);
                  }}
                />
                <div>
                  ({rating}) based on {cookbook.rating.length} rating
                  {cookbook.rating.length > 1 && "s"}.
                </div>
              </div>
            </div>
            <h2>By: {getAuthor(cookbook)}</h2>
            <p>{cookbook.description}</p>
            <div className="w-full min-h-[3rem] bg-orange-100 rounded-lg p-2 flex flex-row justify-center items-center">
              <div className="btn-group btn-group-scrollable">
                <button
                  className="btn bg-[#FE5F55]"
                  onClick={() => {
                    setCurrentTab("Recipes");
                  }}
                >
                  Recipes
                </button>
                <button
                  className="btn bg-[#FE5F55]"
                  onClick={() => {
                    setCurrentTab("Reviews");
                  }}
                >
                  Reviews
                </button>
              </div>
            </div>
          </div>
        )}

        {currentTab === "Recipes" && (
          <div className="p-2 bg-[#EEE0CB] rounded-lg items-center m flex flex-col overflow-y-auto md:flex-row md:flex-wrap md:justify-around gap-2">
            {cookbook.items &&
              cookbook.items.map((item) => {
                return (
                  <RecipeCard
                    key={item.id}
                    recipe={item}
                    cookbookID={cookbook.id}
                  />
                );
              })}
          </div>
        )}
        {currentTab === "Reviews" && (
          <div className="p-2 bg-[#EEE0CB] rounded-lg h-full flex flex-col gap-2">
            <WriteReviewForm />
            <ReviewDisplay />
          </div>
        )}
      </div>
    </div>
  );
};

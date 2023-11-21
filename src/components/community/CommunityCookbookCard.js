import { useNavigate } from "react-router-dom";
import { userData } from "../../assets/data/mockUserData";
import { Rating } from "react-simple-star-rating";
import { useEffect, useState } from "react";
import { useApp } from "../../context/AppProvider";

export const CommunityCookbookCard = ({ cookbook }) => {
  const { state, dispatch } = useApp();

  const averageRating = () => {
    let overallScore = 0;
    let numberOfUniqueRatings = 0;

    if (cookbook.rating) {
      cookbook.rating.forEach((rating) => {
        overallScore += rating.score;
        numberOfUniqueRatings += 1;
      });
    }

    if (numberOfUniqueRatings === 0) {
      return 0;
    }

    return overallScore / numberOfUniqueRatings;
  };

  const [rating, setRating] = useState(averageRating);
  const navigate = useNavigate();

  const handleRating = (rating) => {
    if (state.user) {
      const payload = {
        cookbookID: cookbook.id,
        ratingObject: {
          author: state.user.id,
          score: rating,
        },
      };
      dispatch({ type: "RATE_COOKBOOK", payload: payload });
      setRating(rating);
    } else {
      console.log("Please Log in"); // Dispalay loggin alert modal
    }
  };

  const getAuthor = () => {
    const user = userData.find((user) => user.id === cookbook.author);

    return user.username;
  };

  return (
    <div className="card bg-orange-50 md:flex-row md:max-w-[100%]">
      <img
        src={
          cookbook?.items?.[0]?.image ||
          "https://source.unsplash.com/category/food/300x200"
        }
        className="rounded-t-[0.75rem] md:rounded-tr-[0] md:rounded-l-[0.75rem] md:max-w-[33%]"
        alt=""
      />
      <div className="card-body p-2 w-full">
        <div>
          <div className="flex flex-row w-full justify-between ">
            <h2 className="card-header text-center text-2xl">
              {cookbook?.name || "Cookbook Title Goes here"}
            </h2>
            <Rating
              onClick={handleRating}
              size={36}
              className="flex flex-row "
              transition
              allowFraction
              readonly={!state.user}
              initialValue={rating}
            />
          </div>
        </div>
        <h3 className="mt-[-12px]">By: {getAuthor()}</h3>
        <p className="text-stone-600">
          {cookbook?.description || "Cookbook description"}
        </p>
        <div className="divider divider-horizontal opacity-30 mx-6 my-0"></div>
        <div className="card-footer flex-col gap-2 justify-center">
          <div>Social Buttons</div>
          <button
            className="bg-[#FE5F55] btn"
            onClick={() => {
              navigate(`/community/${cookbook?.id}`);
            }}
          >
            View Cookbook
          </button>
        </div>
      </div>
    </div>
  );
};

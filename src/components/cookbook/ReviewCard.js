import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { Rating } from "react-simple-star-rating";
import { getUserByID } from "../../utils/utilities";
import { useApp } from "../../context/AppProvider";

export const ReviewCard = ({ rating, comment, cookbookID }) => {
  const { state, dispatch } = useApp();
  const commentRating = rating.find((individualRating) => {
    if (individualRating.author === comment.author) {
      return individualRating;
    }
  });
  return (
    <div className="flex flex-row gap-2 items-start md:min-w-[45rem] md:w-fit">
      <div className="w-[4rem] aspect-square bg-gray-500 rounded-full overflow-hidden">
        <img
          src={getUserByID(comment.author).avatarURL}
          alt={getUserByID(comment.author).username}
        />
      </div>
      <div className="flex flex-col w-full gap-1">
        <div className="w-full h-fit">
          <div className=" w-full flex flex-row justify-between ">
            <span className="bg-orange-200 p-1 rounded-lg">
              {getUserByID(comment.author).username}
            </span>
            <div className="mr-auto">
              <Rating
                size={24}
                className="flex flex-row"
                transition
                allowFraction
                readonly={true}
                initialValue={commentRating?.score || 0}
              />
            </div>
            <span className="bg-orange-200 p-1 rounded-lg">{comment.date}</span>
          </div>
        </div>
        <div className="w-full bg-orange-200 min-h-[4rem] rounded-lg p-2">
          {comment.text}
          <div className="w-full h-1rem flex flex-row gap-2 justify-end pr-2">
            <button
              className="btn h-[1.5rem] bg-[#FE5F55] px-2 flex flex-row gap-1"
              onClick={
                state.user
                  ? () => {
                      dispatch({
                        type: "LIKE_REVIEW",
                        payload: {
                          comment: comment,
                          cookbookID: cookbookID,
                          userID: state.user.id,
                        },
                      });
                    }
                  : () => {}
              }
            >
              <HandThumbUpIcon className="block h-4 w-4" />
              <span>
                {!comment.likes.some((commentId) => commentId === state.user.id)
                  ? "like"
                  : "unlike"}
              </span>
              <span>{`(${comment.likes.length || 0})`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

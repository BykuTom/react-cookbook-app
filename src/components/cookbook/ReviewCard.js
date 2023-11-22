import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { Rating } from "react-simple-star-rating";
import { getUserByID } from "../../utils/utilities";

export const ReviewCard = ({ rating, comment }) => {
  return (
    <div className="flex flex-row gap-2 items-start md:w-[45rem]">
      <div className="w-[4rem] aspect-square bg-gray-500 rounded-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
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
                initialValue={rating || 0}
              />
            </div>
            <span className="bg-orange-200 p-1 rounded-lg">{comment.date}</span>
          </div>
        </div>
        <div className="w-full bg-orange-200 min-h-[4rem] rounded-lg p-2">
          {comment.text}
          <div className="w-full h-1rem flex flex-row gap-2 justify-end pr-2">
            <button className="btn h-[1.5rem] bg-[#FE5F55] px-2 flex flex-row gap-1">
              <HandThumbUpIcon className="block h-4 w-4" />
              <span>Like</span> {/* Check if Like or unlike */}
              <span>{`(${comment.likes.length || 0})`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

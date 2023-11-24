import { getCookbookByID } from "../../utils/utilities";
import { ReviewCard } from "./ReviewCard";

export const ReviewDisplay = ({ cookbookID }) => {
  const cookbook = getCookbookByID(cookbookID);

  return (
    <div className="w-full p-2 bg-orange-100 rounded-lg h-full gap-2 flex flex-col overflow-y-auto">
      {cookbook?.comments.map((comment) => {
        return <ReviewCard rating={cookbook.rating} comment={comment} />;
      })}
      {!cookbook.comments ||
        (cookbook?.comments.length === 0 && (
          <div className="w-full text-center py-4 text-error text-lg ">
            There are no reviews on this cookbook yet, please consider leaving
            one.
          </div>
        ))}
    </div>
  );
};

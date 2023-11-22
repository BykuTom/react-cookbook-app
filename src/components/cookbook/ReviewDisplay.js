import { getCookbookByID } from "../../utils/utilities";
import { ReviewCard } from "./ReviewCard";

export const ReviewDisplay = ({ cookbookID }) => {
  const cookbook = getCookbookByID(cookbookID);

  return (
    <div className="w-full p-2 bg-orange-100 rounded-lg h-full">
      {cookbook?.comments.map((comment) => {
        return <ReviewCard rating={cookbook.rating.score} comment={comment} />;
      })}
    </div>
  );
};

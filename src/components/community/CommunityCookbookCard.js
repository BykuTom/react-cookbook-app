import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { getAuthor, averageRating } from "../../utils/utilities";

export const CommunityCookbookCard = ({ cookbook }) => {
  const navigate = useNavigate();

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
            <div className="flex flex-row gap-1 items-center">
              <span className="ml-auto">{`(${averageRating(cookbook)
                .toString()
                .slice(0, 4)})`}</span>
              <Rating
                size={36}
                className="flex flex-row "
                transition
                allowFraction
                readonly
                initialValue={averageRating(cookbook)}
              />
            </div>
          </div>
        </div>
        <h3 className="mt-[-12px]">By: {getAuthor(cookbook)}</h3>
        <p className="text-stone-600">
          {cookbook?.description || "Cookbook description"}
        </p>
        <div className="divider divider-horizontal opacity-30 mx-6 my-0"></div>
        <div className="card-footer flex-col gap-2 justify-center">
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

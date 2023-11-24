import filletImage from "../../assets/images/Reverse-Sear-Filet-Mignon.webp";
import { parseToHTML } from "../../utils/utilities";
import { StarRating } from "../StarRating";
export const RecipeBanner = ({ recipe, rating }) => {
  return (
    <div>
      <div className="overflow-hidden bg-orange-100 py-8 md:mx-4 drop-shadow-lg rounded-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:row-start-1 lg:col-start-2 m-auto w-full">
              <img
                src={recipe.image || filletImage}
                alt="Product screenshot"
                className="w-full max-w-[48rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 "
              />
              <div className="w-full min-h-[2rem] mt-4 flex flex-col lg:flex-row gap-2 justify-end items-center">
                <button className="btn btn-warning w-40">Subscribe</button>
                <button className="btn btn-warning w-40">Share</button>
              </div>
            </div>
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-3xl font-semibold leading-7 text-indigo-600">
                  <StarRating number={rating} />
                </h2>
                <p className="mt-2 text-5xl font-bold tracking-tight text-gray-900 ">
                  {recipe.title}
                </p>
                <p className="mt-6 text-md leading-8 text-gray-600">
                  {parseToHTML(recipe.summary)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

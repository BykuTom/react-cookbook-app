import { useApp } from "../../context/AppProvider";
import { RecipeCard } from "../search/RecipeCard";

export const CookbookDisplay = ({ current, setCurrent }) => {
  const { state, dispatch } = useApp();

  return (
    <div className="flex-2 p-2 rounded-lg min-h-[40vh] w-full bg-orange-100 transition-all duration-300 flex flex-row flex-wrap gap-4 justify-evenly lg:min-h-[calc(100vh-7rem)] lg:mt-1 lg:justify-evenly lg:items-start lg:overflow-y-scroll">
      {current !== "None" && (
        <div className="mb-2 w-full p-2 bg-orange-200 rounded-md flex flex-col-reverse gap-2 justify-center text-center lg:flex-row lg:justify-between lg:items-center lg:overflow-y-scroll">
          {state.cookbooks.map((cookbook) => {
            if (cookbook.id === current) {
              return (
                <p className="text-black" key={cookbook.title}>
                  {cookbook.description}
                </p>
              );
            }
          })}
          <button
            className="btn btn-error self-center"
            onClick={() => {
              dispatch({
                type: "REMOVE_COOKBOOK",
                payload: { cookbookID: current },
              });
              setCurrent("None");
            }}
          >
            Remove Cookbook
          </button>
        </div>
      )}
      {state.cookbooks.map((cookbook) => {
        if (cookbook.id === current) {
          return cookbook.items.map((recipe) => {
            return (
              <RecipeCard
                recipe={recipe}
                key={recipe.id}
                variant={true}
                cookbookID={current}
              />
            );
          });
        }
        return null;
      })}
    </div>
  );
};

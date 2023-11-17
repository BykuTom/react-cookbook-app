import { useState, useEffect } from "react";
import { CreateCookBookModal } from "../components/myCookbooks/CreateCookbookModal";
import { useApp } from "../context/AppProvider";
import { RadioGroup } from "@headlessui/react";
import { RecipeCard } from "../components/search/RecipeCard";
import { CookbookDisplay } from "../components/myCookbooks/CookbookDisplay";

export const MyCookbooks = () => {
  const { state } = useApp();
  const [current, setCurrent] = useState("None");
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    console.log(current);
  }, [current]);

  return (
    <div className="w-full min-h-[calc(100vh-7rem)] p-2 flex bg-orange-50">
      <div className="p-2 mr-2 rounded-lg flex-1 bg-orange-100 transition-all max-w-[20rem] duration-300 flex flex-col justify-center align-top">
        <button
          type="button"
          onClick={openModal}
          className="btn btn-error w-full drop-shadow-md"
        >
          Create a new Cookbook
        </button>
        <RadioGroup
          className="mt-2 w-full h-full bg-orange-200 rounded-lg p-2 overflow-scroll"
          value={current}
          onChange={setCurrent}
        >
          <RadioGroup.Label className={"sr-only"}>
            Choose a list to display
          </RadioGroup.Label>
          {state.cookbooks &&
            state.cookbooks.length > 0 &&
            state.cookbooks.map((cookbook) => {
              return (
                <RadioGroup.Option value={cookbook.id} className="mb-2">
                  {({ checked }) => (
                    <div
                      className={
                        checked
                          ? "text-md text-white btn btn-warning w-full"
                          : "text-md text-black btn btn-outline-warning w-full"
                      }
                    >
                      {cookbook.name}
                    </div>
                  )}
                </RadioGroup.Option>
              );
            })}
        </RadioGroup>
      </div>
      <CreateCookBookModal isOpen={isOpen} closeModal={closeModal} />
      <CookbookDisplay current={current} setCurrent={setCurrent} />
    </div>
  );
};

/* 
<div className="flex-2 p-2 rounded-lg max-h-[calc(100vh-8rem)] overflow-auto w-full bg-orange-100 transition-all duration-300 flex flex-row flex-wrap gap-4 justify-evenly ">
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
      </div> */

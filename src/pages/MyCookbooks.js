import { useState, useEffect } from "react";
import { CreateCookBookModal } from "../components/myCookbooks/CreateCookbookModal";
import { useApp } from "../context/AppProvider";
import { RadioGroup } from "@headlessui/react";

import { CookbookDisplay } from "../components/myCookbooks/CookbookDisplay";
import { useNavigate } from "react-router-dom";

export const MyCookbooks = () => {
  const navigate = useNavigate();
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
    !state.user && navigate("/");
  }, [state.user]);

  return (
    <div className="w-full min-h-[calc(70vh-7rem)] p-2 flex flex-col items-center bg-orange-50 lg:flex-row lg:items-start lg:min-h-[calc(100vh-7.3rem)] lg:h-full">
      {state.user && (
        <div className="p-2 w-full mt-1 mb-2 mr-2 rounded-lg flex-1 bg-orange-100 transition-all duration-300 justify-center align-top lg:min-w-[10rem] lg:min-h-[calc(100vh-7rem)] lg:align-top">
          <button
            type="button"
            onClick={openModal}
            className="btn bg-[#FE5F55] w-full drop-shadow-md"
          >
            Create a new Cookbook
          </button>
          <RadioGroup
            className="mt-2 w-full min-h-[calc(55vh-7rem)] bg-[#EEE0CB] rounded-lg p-2 lg:min-h-[calc(100vh-11rem)] overflow-y-auto "
            value={current}
            onChange={setCurrent}
          >
            <RadioGroup.Label className={"sr-only"}>
              Choose a list to display
            </RadioGroup.Label>
            {state.myCookBooks &&
              state.myCookBooks.length > 0 &&
              state.myCookBooks.map((cookbook) => {
                return (
                  <RadioGroup.Option
                    key={cookbook.id}
                    value={cookbook.id}
                    className="mb-2 w-full flex align-middle justify-center"
                  >
                    {({ checked }) => (
                      <div
                        className={
                          checked
                            ? "text-md text-stone-700 btn bg-[#64d97b] w-full max-w-[12rem]"
                            : "text-md text-stone-700 btn btn-outline border-[#64d97b] hover:bg-[#64d97b]  w-full max-w-[12rem]"
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
      )}
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

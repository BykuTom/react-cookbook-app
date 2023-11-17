import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CreateCookBookModal } from "../components/myCookbooks/CreateCookbookModal";
import { useApp } from "../context/AppProvider";
import { RadioGroup } from "@headlessui/react";
import { RecipeCard } from "../components/search/RecipeCard";

export const MyCookbooks = () => {
  const { state, dispatch } = useApp();
  const [current, setCurrent] = useState("None");
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    onSubmit: ({ name, description }) => {
      const newCookBook = {
        id: crypto.randomUUID(),
        name: name,
        description: description,
        items: [],
      };

      dispatch({ type: "CREATE_NEW_COOKBOOK", payload: newCookBook });
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Cookbook name is required")
        .min(4, "Cookbook's name needs to be four characters or longer")
        .max(20, "Cookbooks title should be shorter than twenty characters"),
      description: Yup.string().max(
        150,
        "Description cannot be longer than 150 characters"
      ),
    }),
  });

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
      <CreateCookBookModal
        isOpen={isOpen}
        closeModal={closeModal}
        formik={formik}
      />
      <div className="flex-2 p-2 rounded-lg min-w-[40rem] bg-orange-100 transition-all duration-300 flex flex-row flex-wrap gap-4 justify-evenly ">
        {state.cookbooks.map((cookbook) => {
          if (cookbook.id === current) {
            return cookbook.items.map((recipe) => {
              return <RecipeCard recipe={recipe} key={recipe.id} />;
            });
          }
          return null;
        })}
      </div>
    </div>
  );
};

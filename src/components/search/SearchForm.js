import React, { useState } from "react";
import { useFormik } from "formik";
import { MultiSelect } from "./MultiSelect";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const SearchForm = ({ onSuccess, initialSearchTerm }) => {
  // initialFilters to be added
  const [showFilters, setShowFilters] = useState(true);

  const dummyFilter = {
    cusisine: "American",
    mealType: "breakfast",
  };

  const formik = useFormik({
    initialValues: {
      query: initialSearchTerm || "",
    },

    onSubmit: (query, filters = dummyFilter) => {
      onSuccess([query, filters]);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mt-2 mb-2 p-1">
      <div className="flex flex-row w-full items-center justify-between gap-2">
        {" "}
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative w-full ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-600 rounded-lg bg-white focus:border-black dark:text-black"
            placeholder="Discover Delicious Recipes!"
            required
            name="query"
            value={formik.values.query}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <button
            type="submit"
            className="text-black absolute end-2.5 top-2.5 bg-red-300 hover:bg-red-400 rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
        <button
          className="btn bg-[#FE5F55] aspect-square p-0"
          onClick={() => {
            setShowFilters(!showFilters);
          }}
        >
          {showFilters ? (
            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
      {showFilters && (
        <div className=" bg-[#EEE0CB] min-h-[5rem] w-full mt-2 p-2 rounded-lg">
          <MultiSelect
            selectedValues={formik.values.intolerances}
            setSelectedValues={(intolerances) =>
              formik.setFieldValue("intolerances", intolerances)
            }
          />
        </div>
      )}
    </form>
  );
};

{
}

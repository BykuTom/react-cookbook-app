import React from 'react';
import { useFormik } from 'formik';
import { MultiSelect } from './search/MultiSelect';

export const SearchForm = ({ onSuccess, initialSearchTerm }) => {
  

  const formik = useFormik({
    initialValues: {
      query: initialSearchTerm || '',
      intolerances: "",
    },
    
    onSubmit: (query) => {

      console.log('Form query:', query);

      if (onSuccess) {
        onSuccess(query);
        console.log("success")
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='mt-2 mb-2 p-1'>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
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
          type="search"
          id="default-search"
          name="query"
          className="block mb-2 w-full p-4 ps-10 text-sm text-gray-900 border border-gray-600 rounded-lg bg-white focus:border-black dark:text-black"
          placeholder="Search for recipes"
          required
          onChange={formik.handleChange}
          value={formik.values.query}
          onBlur={formik.handleBlur}
        />
        <button
          type="submit"
          className="text-black absolute end-2.5 bottom-2.5 bg-red-300 hover:bg-red-400 rounded-lg text-sm px-4 py-2"
          >
          Search
        </button>
      </div>
      <MultiSelect
        selectedValues={formik.values.intolerances}
        setSelectedValues={(intolerances) => formik.setFieldValue('intolerances', intolerances)}
      />

    </form>
  );
};
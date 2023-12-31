import React from 'react';
import Select from "react-select";

const cuisines = [
    { value: "African", label: "African" },
    { value: "Asian", label: "Asian" },
    { value: "American", label: "American" },
    { value: "British", label: "British" },
    { value: "Cajun", label: "Cajun" },
    { value: "Caribbean", label: "Caribbean" },
    { value: "Chinese", label: "Chinese" },
    { value: "Eastern European", label: "Eastern European" },
    { value: "European", label: "European" },
    { value: "French", label: "French" },
    { value: "German", label: "German" },
    { value: "Greek", label: "Greek" },
    { value: "Indian", label: "Indian" },
    { value: "Irish", label: "Irish" },
    { value: "Italian", label: "Italian" },
    { value: "Japanese", label: "Japanese" },
    { value: "Jewish", label: "Jewish" },
    { value: "Korean", label: "Korean" },
    { value: "Latin American", label: "Latin American" },
    { value: "Mediterranean", label: "Mediterranean" },
    { value: "Mexican", label: "Mexican" },
    { value: "Middle Eastern", label: "Middle Eastern" },
    { value: "Nordic", label: "Nordic" },
    { value: "Southern", label: "Southern" },
    { value: "Spanish", label: "Spanish" },
    { value: "Thai", label: "Thai" },
    { value: "Vietnamese", label: "Vietnamese" }
]

export const Filters = () => {



  return (
    <div className='flex'>
        <div className=' h-max p-1 w-1/4' >
        <Select
            isMulti
            name="intolerances"
            options={cuisines}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Cuisines"
            />
        <Select
            isMulti
            name="intolerances"
            options={cuisines}
            className="basic-multi-select mb-1"
            classNamePrefix="select"
            placeholder="Meal Type"
            />
        <input
            name="intolerances"
            options={cuisines}
            className="basic-multi-select mb-1"
            placeholder="Include Ingredients"
            />
        <input
            name="intolerances"
            options={cuisines}
            className="basic-multi-select"
            placeholder="Exclude Ingredients"
            />
        </div>
    </div>
  )
}

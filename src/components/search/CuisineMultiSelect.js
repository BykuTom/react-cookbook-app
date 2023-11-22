import { useEffect } from "react";
import Select from "react-select";

const cuisineOptions = [
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
  { value: "Vietnamese", label: "Vietnamese" },
];

export const CuisineMultiSelect = ({ selectedValues, setSelectedValues }) => {
  const selectedValuesArray = selectedValues.split(",");
  const defaultValueArray = cuisineOptions.filter((defaultValue) => {
    return selectedValuesArray.includes(defaultValue.value.toLowerCase());
  });

  const handleChange = (cuisineOptions) => {
    const cuisinesValue = cuisineOptions.map((option) =>
      option.value.toLowerCase()
    );
    setSelectedValues(cuisinesValue.join(","));
  };

  return (
    <Select
      defaultValue={defaultValueArray}
      isMulti
      name="cuisine"
      options={cuisineOptions}
      className="basic-multi-select text-black"
      classNamePrefix="select"
      placeholder="Cuisine"
      onChange={handleChange}
    />
  );
};

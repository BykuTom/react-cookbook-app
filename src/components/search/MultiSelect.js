import React, { useEffect, useState } from "react";

import Select from "react-select";
const colourOptions = [
  { value: "Dairy", label: "Dairy" },
  { value: "Egg", label: "Egg" },
  { value: "Gluten", label: "Gluten" },
  { value: "Grain", label: "Grain" },
  { value: "Peanut", label: "Peanut" },
  { value: "Seafood", label: "Seafood" },
  { value: "Sesame", label: "Sesame" },
  { value: "Shellfish", label: "Shellfish" },
  { value: "Soy", label: "Soy" },
  { value: "Sulfite", label: "Sulfite" },
  { value: "Tree Nut", label: "Tree Nut" },
  { value: "Wheat", label: "Wheat" },
];

export const MultiSelect = () => {
  const [value, setValue] = useState(null);

  return (
    <Select
      defaultValue={null}
      isMulti
      name="colors"
      options={colourOptions}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={(event) => {
        setValue(event);
      }}
    />
  );
};

import Select from "react-select";

const intolerancesOptions = [
  { value: "dairy", label: "Dairy" },
  { value: "egg", label: "Egg" },
  { value: "gluten", label: "Gluten" },
  { value: "grain", label: "Grain" },
  { value: "peanut", label: "Peanut" },
  { value: "seafood", label: "Seafood" },
  { value: "sesame", label: "Sesame" },
  { value: "shellfish", label: "Shellfish" },
  { value: "soy", label: "Soy" },
  { value: "sulfite", label: "Sulfite" },
  { value: "tree Nut", label: "Tree Nut" },
  { value: "wheat", label: "Wheat" },
];

export const IntoleranceMultiSelect = ({
  selectedValues,
  setSelectedValues,
}) => {
  const handleChange = (intolerancesOption) => {
    const intoleranceValue = intolerancesOption.map((option) => option.value);
    //console.log(intoleranceValue.join(","));
    setSelectedValues(intoleranceValue.join(",")); // joins to return a ready to use param
  };

  return (
    <Select
      defaultValue={selectedValues}
      isMulti
      clearValue
      name="intolerances"
      options={intolerancesOptions}
      className="basic-multi-select text-black"
      classNamePrefix="select"
      placeholder="Intolerances"
      onChange={handleChange}
    />
  );
};

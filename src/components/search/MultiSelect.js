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

export const MultiSelect = ({selectedValues, setSelectedValues}) => {
  const handleChange = (intolerancesOption) => {
    //Extracting just value from intolerancesOption
    const intoleranceValue = intolerancesOption.map((option) => option.value);
    setSelectedValues(intoleranceValue);
  }

  return (
    <Select
      defaultValue={selectedValues}
      isMulti
      name="intolerances"
      options={intolerancesOptions}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder="Intolerances"
      onChange={handleChange}
    />
  );
};
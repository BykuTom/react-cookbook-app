import { SearchForm } from "../components/SearchForm"
import { Filters } from "../components/Filters";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useRecipeSearch  } from "../hooks/useRecipeSearch";


import { MultiSelect } from "../components/search/MultiSelect";
import { RecipeCard } from "../components/search/RecipeCard";

export const Search = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q:query"))


  const { data, isLoading, error } = useRecipeSearch(searchTerm)

  const onSuccess = (query) => {
    console.log(data);
    error && console.log(error);
    setSearchParams({q: query})
    setSearchTerm(query)
  }

  return (
    <div>
      <SearchForm onSuccess={onSuccess}/>
      <Filters />
      <RecipeCard
        title="Tasty Burger 100% Beef"
        description={
          "Amazingly delicous burger, zinger stacker from KFC or chicken MCSpicy from MCdonald, burger king has trash burgers though. "
        }
      />
    </div>
  );
};

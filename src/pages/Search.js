import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useRecipeSearch } from "../hooks/useRecipeSearch";
import { SearchForm } from "../components/SearchForm";
import { Filters } from "../components/Filters";
import { RecipeCard } from "../components/search/RecipeCard";
import * as utils from "../utils/utilities";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q"));
  const [filterTerm, setFilterTerm] = useState(
    utils.decodeURIObject(searchParams.get("f"))
  );

  const { data, isLoading, error } = useRecipeSearch([searchTerm, filterTerm]);

  const onSuccess = ({ query, filters }) => {
    setSearchParams({ q: query });
    setSearchParams({ f: filters });
    setSearchTerm([query]);
    setFilterTerm([filters]);
  };

  useEffect(() => {
    /* console.log(searchParams.get("q"));
    console.log(searchParams.get("f"));
    console.log(data); */
  }, [data]);

  return (
    <div>
      <SearchForm onSuccess={onSuccess} />
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

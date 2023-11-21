import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useRecipeSearch } from "../hooks/useRecipeSearch";
import { SearchForm } from "../components/SearchForm";
import * as utils from "../utils/utilities";
import { SearchResults } from "../components/search/SearchResults";
//import { Sparkles } from "heroicons-react";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q"));
  const [filterTerm, setFilterTerm] = useState(
    utils.decodeURIObject(searchParams.get("f"))
  );

  const { data, isLoading, error } = useRecipeSearch([searchTerm, filterTerm]);

  const onSuccess = ([{ query }, filters]) => {
    console.log(query);
    //console.log(filters); // filters to be fixed
    setSearchParams({ q: query }, { f: filters });

    setSearchTerm(query);
    /*  setFilterTerm([filters]); */
  };

  // useEffect(() => {
  /* console.log(searchParams.get("q"));
    console.log(searchParams.get("f"));
     */
  //console.log(data);
  // }, [data]);

  return (
    <div className="min-h-[calc(100vh-8rem)] w-full p-2 bg-orange-50">
      <SearchForm onSuccess={onSuccess} initialSearchTerm={searchTerm} />
      <div className="bg-orange-100 p-2 rounded-lg min-h-[calc(100vh-13.6rem)] flex flex-col items-center justify-center">
        {data && Array.isArray(data) && data.length > 0 ? (
          <SearchResults results={data} variant={false} />
        ) : (
          <div className="flex flex-col g-2 justify-center items-center">
            <h1 className="text-red-300 text-3xl font-bold text-center self-center">
              Discover Recipes !
            </h1>
            {isLoading && (
              <div class="spinner-dot-circle spinner-error">
                <div class="spinner-dot"></div>
                <div class="spinner-dot"></div>
                <div class="spinner-dot"></div>
                <div class="spinner-dot"></div>
                <div class="spinner-dot"></div>
                <div class="spinner-dot"></div>
                <div class="spinner-dot"></div>
                <div class="spinner-dot"></div>
              </div>
            )}
            {error || (data && data.length === 0) ? (
              <h2 className="text-error">
                Sorry, stuff you're looking for can't be found.
              </h2>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useRecipeSearch } from "../hooks/useRecipeSearch";
import { SearchForm } from "../components/search/SearchForm";
import * as utils from "../utils/utilities";
import { SearchResults } from "../components/search/SearchResults";
import { AlertBox } from "../components/AlertBox";
//import { Sparkles } from "heroicons-react";

export const Search = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q"));
  const [filterTerm, setFilterTerm] = useState(
    utils.decodeURIObject(searchParams.get("f"))
  );

  const { data, isLoading, error } = useRecipeSearch([searchTerm, filterTerm]);

  const onSuccess = ([query, filters]) => {
    setSearchParams({
      q: query,
      ...(filters &&
        Object.keys(filters).length !== 0 && {
          f: utils.encodeURIObject(filters),
        }),
    });

    setSearchTerm(query);
    if (Object.keys(filters).length !== 0) {
      setFilterTerm(filters);
    } else setFilterTerm(undefined);
  };

  return (
    <div className="bg-orange-50">
      {showAlert && (
        <AlertBox
          alertText={"Added to cookbook!"}
          setShowAlert={setShowAlert}
          positionX={"sm:right-10"}
          positionY={"top-32 sm:top-24"}
          border={"border-green-400"}
        />
      )}
      <div className="min-h-[calc(100vh-8rem)] w-full p-2 max-w-[90rem] mx-auto">
        <SearchForm
          onSuccess={onSuccess}
          initialSearchTerm={searchTerm}
          initialFilterTerm={filterTerm}
        />
        <div className="bg-orange-100 p-2 rounded-lg min-h-[calc(100vh-13.6rem)] flex flex-col items-center justify-center">
          {data && Array.isArray(data) && data.length > 0 ? (
            <SearchResults
              results={data}
              variant={false}
              setShowAlert={setShowAlert}
            />
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
    </div>
  );
};

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useRecipeSearch } from "../hooks/useRecipeSearch";
import { SearchForm } from "../components/SearchForm";
import * as utils from "../utils/utilities";
import { SearchResults } from "../components/search/SearchResults";
import { Dialog } from "@headlessui/react";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q"));
  const [filterTerm, setFilterTerm] = useState(
    utils.decodeURIObject(searchParams.get("f"))
  );

  const { data, error } = useRecipeSearch([searchTerm, filterTerm]);
  const isLoading = true;

  const onSuccess = ([{ query }, filters]) => {
    console.log(query);
    console.log(filters); // filters to be fixed
    setSearchParams({ q: query }, { f: filters });

    setSearchTerm([query]);
    /*  setFilterTerm([filters]); */
  };

  useEffect(() => {
    /* console.log(searchParams.get("q"));
    console.log(searchParams.get("f"));
     */
    console.log(data);
  }, [data]);

  return (
    <div>
      <SearchForm onSuccess={onSuccess} initialSearchTerm={searchTerm} />
      {/*   {isLoading && (
        <Dialog open={true} onClose={() => {}}>
          <Dialog.Panel>
            <div class="spinner-dot-circle">
              <div class="spinner-dot"></div>
              <div class="spinner-dot"></div>
              <div class="spinner-dot"></div>
              <div class="spinner-dot"></div>
              <div class="spinner-dot"></div>
              <div class="spinner-dot"></div>
              <div class="spinner-dot"></div>
              <div class="spinner-dot"></div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )} */}
      {data && Array.isArray(data) && data.length > 0 && (
        <SearchResults results={data} />
      )}
    </div>
  );
};

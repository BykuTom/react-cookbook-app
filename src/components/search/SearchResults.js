import ReactPaginate from "react-paginate";
import { RecipeCard } from "./RecipeCard";
import { useEffect, useState } from "react";

export const SearchResults = ({ results, setShowAlert }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(results.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(results.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, results]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % results.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-evenly">
        {currentItems.map((result) => {
          return (
            <RecipeCard
              key={result.id}
              recipe={result}
              setShowAlert={setShowAlert}
            />
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        previousLabel="< Previous"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="text-black flex flex-row flex-wrap justify-center gap-1 mt-4 max-w-screen"
        pageClassName="btn bg-[#FE5F55] relative"
        pageLinkClassName="absolute inset-0 flex items-center justify-center"
        previousClassName="btn bg-[#FE5F55] relative min-w-[calc(10ch+1.5rem)]"
        previousLinkClassName="absolute inset-0 flex items-center justify-center"
        nextClassName="btn bg-[#FE5F55] relative min-w-[calc(6ch+1.5rem)]"
        nextLinkClassName="absolute inset-0 flex items-center justify-center"
        breakClassName="btn bg-[#FE5F55] aspect-square"
      />
    </>
  );
};

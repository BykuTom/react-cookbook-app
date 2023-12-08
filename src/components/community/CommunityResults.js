import { useApp } from "../../context/AppProvider";
import { CommunityCookbookCard } from "./CommunityCookbookCard";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

export const CommunityResults = ({ searchQuery }) => {
  const { state } = useApp();

  const filteredData = searchQuery
    ? state.cookbooks.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : state.cookbooks;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredData]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems &&
        currentItems.length > 0 &&
        currentItems?.map((cookbook) => {
          return (
            <CommunityCookbookCard key={cookbook.id} cookbook={cookbook} />
          );
        })}
      {currentItems && currentItems.length === 0 && (
        <div className="text-center py-6 w-full text-error">
          There seems to be no results :/, try adding a cookbook yourself :D
        </div>
      )}
      <div className="mx-auto">
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
      </div>
    </>
  );
};

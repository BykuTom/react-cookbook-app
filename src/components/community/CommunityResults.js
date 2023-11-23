import { useApp } from "../../context/AppProvider";
import { CommunityCookbookCard } from "./CommunityCookbookCard";

export const CommunityResults = ({ searchQuery }) => {
  const { state } = useApp();

  const filteredData = searchQuery
    ? state.cookbooks.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : state.cookbooks;

  console.log(filteredData);
  return (
    <>
      {filteredData &&
        filteredData?.map((cookbook) => {
          return (
            <CommunityCookbookCard key={cookbook.id} cookbook={cookbook} />
          );
        })}
    </>
  );
};

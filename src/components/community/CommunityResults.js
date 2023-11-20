import { useApp } from "../../context/AppProvider";
import { CommunityCookbookCard } from "./CommunityCookbookCard";

export const CommunityResults = () => {
  const { state } = useApp();

  return (
    <>
      {state.cookbooks.map((cookbook) => {
        return <CommunityCookbookCard key={cookbook.id} cookbook={cookbook} />;
      })}
    </>
  );
};

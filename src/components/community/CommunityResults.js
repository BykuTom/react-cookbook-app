import { useApp } from "../../context/AppProvider";
import { CommunityCookbookCard } from "./CommunityCookbookCard";

export const CommunityResults = () => {
  const { state } = useApp();

  return (
    <div className="bg-orange-200 w-full rounded-lg p-2 h-full flex flex-row gap-2 md:flex-col overflow-x-hidden overflow-y-scroll ">
      {state.cookbooks.map((cookbook) => {
        return <CommunityCookbookCard key={cookbook.id} cookbook={cookbook} />;
      })}
    </div>
  );
};

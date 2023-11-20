import { CommunityCategories } from "../components/community/CommunityCategories";
import { CommunityResults } from "../components/community/CommunityResults";
import { CommunitySearch } from "../components/community/CommunitySearch";

export const CookbookDashboard = () => {
  return (
    <div className="bg-orange-50 w-full min-h-[calc(100vh-7rem)] flex flex-col text-black gap-2 p-2">
      <CommunitySearch />
      <div className="w-full bg-orange-100 rounded-lg p-2 h-[calc(100vh-8rem)] max-w-[90rem] mx-auto flex flex-col sm:flex-row gap-2">
        <CommunityCategories />
        <CommunityResults />
      </div>
    </div>
  );
};

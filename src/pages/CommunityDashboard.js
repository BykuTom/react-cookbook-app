import { useState } from "react";
import { CommunityResults } from "../components/community/CommunityResults";
import { CommunitySearch } from "../components/community/CommunitySearch";

export const CommunityDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-orange-50 w-full min-h-[calc(100vh-7rem)] flex flex-col text-black gap-2 p-2">
      <CommunitySearch setSearchQuery={setSearchQuery} />
      <div className="w-full bg-orange-100  p-2 h-[calc(100vh-8rem)] max-w-[90rem] flex-wrap mx-auto rounded-lg flex flex-row gap-2 md:flex-col md:flex-nowrap overflow-x-hidden overflow-y-auto justify-center md:justify-normal">
        <CommunityResults searchQuery={searchQuery} />
      </div>
    </div>
  );
};
<div className="bg-orange-200 w-full rounded-lg p-2 h-full flex flex-row gap-2 md:flex-col overflow-x-hidden overflow-y-auto "></div>;

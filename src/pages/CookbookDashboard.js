const CommunitySearch = () => {
  return <div>community Search</div>;
};

const CommunityResults = () => {
  return <div>results</div>;
};

const CommunityCategories = () => {
  return (
    <div className="bg-orange-100 h-full w-[15rem] p-2 rounded-lg h-[calc(100vh-8rem)]">
      Categories
    </div>
  );
};

export const CookbookDashboard = () => {
  return (
    <div className="bg-orange-50 w-full min-h-[calc(100vh-7rem)] flex flex-row text-black gap-2 p-2">
      <CommunityCategories />
      <div className="w-full bg-orange-100 rounded-lg p-2 h-[calc(100vh-8rem)]">
        <CommunitySearch />
        <CommunityResults />
      </div>
    </div>
  );
};

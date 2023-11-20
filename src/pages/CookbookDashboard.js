const CommunitySearch = () => {
  return (
    <div className=" w-full bg-orange-100 rounded-lg p-2">
      <form className="relative max-w-[60rem] mx-auto">
        <input
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-600 rounded-lg bg-white focus:border-black dark:text-black"
          placeholder="Search for cookbooks!"
          required
          name="query"
        />
        <button
          type="submit"
          className="text-gray-50 font-bold absolute end-2.5 bottom-2.5 bg-red-300 hover:bg-red-400 rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </form>
    </div>
  );
};

const CommunityResults = () => {
  return (
    <div className="bg-orange-200 w-full rounded-lg p-2 h-full ">
      <CommunityCookbookCard />
    </div>
  );
};

const CommunityCookbookCard = () => {
  return (
    <div className="card bg-orange-50 md:flex-row md:max-w-[100%]">
      <img
        src="https://source.unsplash.com/random/300x200"
        className="rounded-t-[0.75rem] md:rounded-tr-[0] md:rounded-l-[0.75rem] md:max-w-[33%]"
        alt=""
      />
      <div className="card-body p-2">
        <h2 className="card-header justify-center">Cookbook Title Goes here</h2>
        <p className="text-stone-600">
          An amazing cookbook, truly one of the kind, come subscribe to it now
          and save yourself the trouble of searching manually.
        </p>
        <div className="divider divider-horizontal opacity-30 mx-6 my-0"></div>
        <div className="card-footer flex-col gap-2 justify-center">
          <div>Social Buttons</div>
          <button className="btn-warning btn">View Cookbook</button>
        </div>
      </div>
    </div>
  );
};

const categories = ["French", "English", "Chinese", "Italian", "Events"];

const CommunityCategories = () => {
  return (
    <div className="bg-orange-200 min-h-[5rem] sm:h-full w-full sm:w-[15rem] p-2 rounded-lg flex flex-col gap-2 items-center">
      <div className="divider text-error font-bol divider-horizontal opacity-70 mx-6 my-2 w-full">
        Categories
      </div>
      {categories.map((category) => {
        return <button className="btn btn-error w-full">{category}</button>;
      })}
    </div>
  );
};

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

export const CommunitySearch = ({ setSearchQuery }) => {
  return (
    <div className=" w-full bg-orange-100 rounded-lg p-2">
      <form className="relative max-w-[60rem] mx-auto">
        <input
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-600 rounded-lg bg-white focus:border-black dark:text-black"
          placeholder="Search for cookbooks!"
          required
          name="query"
          onChange={(event) => {
            event.preventDefault();
            setSearchQuery(event.target.value);
          }}
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

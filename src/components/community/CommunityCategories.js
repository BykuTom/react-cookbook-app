const categories = ["French", "English", "Chinese", "Italian", "Events"];

export const CommunityCategories = () => {
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

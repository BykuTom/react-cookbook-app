import { userData } from "../../assets/data/mockUserData";

export const CommunityCookbookCard = ({ cookbook }) => {
  const getAuthor = () => {
    const user = userData.find((user) => user.id === cookbook.author);
    console.log(user);
    return user.username;
  };

  return (
    <div className="card bg-orange-50 md:flex-row md:max-w-[100%]">
      <img
        src={
          cookbook?.items?.[0]?.image ||
          "https://source.unsplash.com/category/food/300x200"
        }
        className="rounded-t-[0.75rem] md:rounded-tr-[0] md:rounded-l-[0.75rem] md:max-w-[33%]"
        alt=""
      />
      <div className="card-body p-2 w-full">
        <h2 className="card-header justify-center">
          {cookbook?.name || "Cookbook Title Goes here"}
        </h2>
        <h3 className="text-center mt-[-12px]">{getAuthor()}</h3>
        <p className="text-stone-600">
          {cookbook?.description || "Cookbook description"}
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

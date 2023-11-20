import { useParams } from "react-router-dom";
import { useApp } from "../context/AppProvider";

export const Cookbook = () => {
  const { cookbookID } = useParams();
  const { state } = useApp();

  const filteredCookbooks = state.cookbooks.filter((cookbook) => {
    return cookbook.id === cookbookID;
  });

  console.log(cookbookID);
  console.log(state.cookbooks);
  console.log(filteredCookbooks);

  if (filteredCookbooks.length === 0) {
    return (
      <div className="bg-orange-50 text-black h-[calc(100vh-4rem)]">
        Cookbook not found
      </div>
    );
  }

  const cookbook = filteredCookbooks[0];

  return <>{cookbook && <div>{cookbook.name}</div>}</>;
};

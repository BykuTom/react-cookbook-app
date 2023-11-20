import { useParams } from "react-router-dom";
import { useApp } from "../context/AppProvider";

export const Cookbook = () => {
  const { cookbookID } = useParams();
  const { state } = useApp();

  const filteredCookbooks = state.cookbooks.filter((cookbook) => {
    return cookbook.id === cookbookID;
  });

  // Check if the cookbook is found
  if (filteredCookbooks.length === 0) {
    return <div>Cookbook not found</div>;
  }

  const cookbook = filteredCookbooks[0];

  return <>{cookbook && <div>{cookbook.name}</div>}</>;
};

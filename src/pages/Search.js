import { MultiSelect } from "../components/search/MultiSelect";
import { RecipeCard } from "../components/search/RecipeCard";

export const Search = () => {
  return (
    <div>
      <MultiSelect />
      <RecipeCard
        title="Tasty Burger 100% Beef"
        description={
          "Amazingly delicous burger, zinger stacker from KFC or chicken MCSpicy from MCdonald, burger king has trash burgers though. "
        }
      />
    </div>
  );
};

import { RecipeCard } from "./RecipeCard";

export const SearchResults = ({ results }) => {
  return (
    <div>
      {results.map((result) => {
        return (
          <RecipeCard
            key={result.id}
            title={result.title}
            summary={result.summary}
            imageURL={results.image}
          />
        );
      })}
    </div>
  );
};

import { RecipeCard } from "./RecipeCard";

export const SearchResults = ({ results }) => {
  console.log(results);

  return (
    <div className="flex flex-wrap gap-4 justify-evenly">
      {results.map((result) => {
        return <RecipeCard key={result.id} recipe={result} />;
      })}
    </div>
  );
};

/* {<RecipeCard
    key={result.id}
    title={result.title}
    summary={result.summary}
    imageURL={results.image}
  />} */

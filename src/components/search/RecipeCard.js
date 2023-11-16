import { useEffect, useState } from "react";

export const RecipeCard = ({ title, summary, imageURL }) => {
  const [myList, setMyList] = useState(() => {
    const savedList = localStorage.getItem('myList');
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    localStorage.setItem('myList', JSON.stringify(myList));
  }, [myList]);

  const addToRecipeList = () => { 
    setMyList({key: title})
  };

  let string = summary;

  if (string.length > 167) {
    string = summary.slice(0, 168) + '(...)';
  }

  return (
    <div className="card card-image-cover bg-gray-50 drop-shadow-lg">
      <img src={imageURL} alt="" />
      <div className="card-body py-4">
        <h2 className="card-header text-black">{title}</h2>
        <p className="text-black h-[7.5rem]">{string}</p>
        <div className="card-footer">
          <button className="btn-warning btn mx-auto font-bold text-lg p-1">
            Start Cooking!
          </button>
          <button
            className="btn-danger btn mx-auto font-bold text-lg p-1"
            type="button"
            onClick={addToRecipeList} // Fixed onClick handler
          >
            Add to Recipe List
          </button>
        </div>
      </div>
    </div>
  );
};
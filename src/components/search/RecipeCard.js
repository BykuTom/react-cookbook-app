import filletImage from "../../assets/images/Reverse-Sear-Filet-Mignon.webp";

export const RecipeCard = ({ title, summary, imageURL }) => {
  let string = summary;

  if (string.length > 167) {
    string = summary.slice(0, 168) + "(...)";
  }

  return (
    <div className="card card-image-cover bg-gray-50 drop-shadow-lg">
      <img src={imageURL} alt="" />
      <div className="card-body py-4">
        <h2 className="card-header text-black">{title}</h2>
        <p className="text-black h-[7.5rem]">{string}</p>
        <div className="card-footer">
          <button className="btn-warning btn mx-auto font-bold text-lg">
            Start Cooking!
          </button>
        </div>
      </div>
    </div>
  );
};

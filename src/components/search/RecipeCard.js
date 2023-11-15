import filletImage from "../../assets/images/Reverse-Sear-Filet-Mignon.webp";

export const RecipeCard = ({ title, description }) => {
  let string = description;

  if (string.length > 167) {
    string = description.slice(0, 168) + "(...)";
  }

  return (
    <div className="card card-image-cover bg-gray-50 drop-shadow-lg">
      <img src={filletImage} alt="" />
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

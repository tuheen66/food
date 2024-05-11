/* eslint-disable react/prop-types */
import { FaRegClock, FaFire } from "react-icons/fa6";

const RecipeCard = ({ recipe, handleWantToToCook }) => {
  const {
    
    image,
    name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="lg:w-[320px] p-4 rounded-xl border-2 shadow-green-200 shadow-xl ">
      <div className="mb-4">
        <img className="rounded-xl" src={image} alt="" />
      </div>
      <div>
        <div className="mb-2 space-y-2">
          <h3 className="font-bold text-xl text-[#282828] ">{name} </h3>
          <p className="text-[#878787]">{short_description}</p>
        </div>

        <h4 className="font-bold text-lg text-[#282828] ">
          ingredients: <span>{ingredients.length}</span>
        </h4>

        <div className="mb-4 text-[#878787] h-[200px] ">
          {ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </div>

        <div className="flex gap-8 mb-8 text-[#878787] ">
          <div className="flex gap-2 items-center">
            <FaRegClock />
            <p>
              <span>{preparing_time} </span>minutes
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <FaFire />
            <p>
              <span>{calories} </span>calories
            </p>
          </div>
        </div>
        <button
          onClick={() => handleWantToToCook({ recipe })}
          className="bg-[#0BE58A] py-1 px-4 border-2 rounded-full font-bold hover:bg-transparent hover:text-black [#0BE58A] hover:border-[#0BE58A]"
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;

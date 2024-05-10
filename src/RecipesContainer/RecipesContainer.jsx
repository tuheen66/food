import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

// eslint-disable-next-line react/prop-types
const RecipesContainer = ({handleWantToToCook}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

   

  return (
    <div className=" lg:w-[750px] grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} handleWantToToCook={handleWantToToCook}></RecipeCard>
      ))}

     
    </div>
  );
};

export default RecipesContainer;

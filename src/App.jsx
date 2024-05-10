import { useState } from "react";
import Banner from "./Banner/Banner";
import Cooking from "./Cooking/Cooking";
import NavBar from "./NavBar/NavBar";
import RecipesContainer from "./RecipesContainer/RecipesContainer";
import swal from "sweetalert";

function App() {
  const [wantToCook, setWantToCook] = useState([]);

  const [currentlyCookings, setCurrentlyCookings] = useState([]);

  const [preparingTime, setPreparingTime] = useState(0);

  const [calories, setCalories]=useState(0)

  const handleWantToToCook = ({ recipe }) => {
    const ifExists = wantToCook.find((item) => item.id == recipe.id);
    if (!ifExists) {
      const newRecipe = [...wantToCook, recipe];
      setWantToCook(newRecipe);
    } else {
      swal("You already added this to your want to cook list!");
    }
  };

  const handlePreparing = (id) => {
    const nowCooking = wantToCook.filter((item) => item.id === id);

    const newPreparingTime = preparingTime + nowCooking[0].preparing_time;

    setPreparingTime(newPreparingTime);

    const newCalories = calories + nowCooking[0].calories

    setCalories(newCalories)

    const newCurrentlyCooking = [...currentlyCookings, nowCooking];
    setCurrentlyCookings(newCurrentlyCooking);

    const remaining = wantToCook.filter((item) => item.id !== id);
    setWantToCook(remaining);
  };

  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      <Banner></Banner>

      <div className="text-center mb-8">
        <h3 className="text-4xl font-bold mb-4">Our Recipes</h3>
        <p className="lg:w-2/3 mx-auto">
        Discover culinary delights on our website! Our recipes are crafted with passion, blending flavors and techniques to create memorable dining experiences. Dive in and elevate your cooking journey today.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mb-20 mx-4 ">
        <RecipesContainer
          handleWantToToCook={handleWantToToCook}
        ></RecipesContainer>

        <Cooking
          wantToCook={wantToCook}
          handlePreparing={handlePreparing}
          currentlyCookings={currentlyCookings}
          preparingTime={preparingTime}
          calories={calories}
          
        ></Cooking>
      </div>
    </div>
  );
}

export default App;

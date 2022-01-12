import React, { useEffect, useState } from "react";
import axios from "axios";
import IngredientsDetails from "./IngredientsDetails";
import "./MealStyles.css";
import Trigger from "./Trigger";
import MealVideo from "./MealVideo";
function MealContainer() {
  const [mealInfo, setMealInfo] = useState(null);

  const getData = async () => {
    const MEAL_URL = "https://www.themealdb.com/api/json/v1/1/random.php";
    const result = await axios.get(MEAL_URL);
    setMealInfo(result.data.meals[0]);
    console.log(result.data.meals[0]);
  };
  return (
    <div className="container">
      <div className="trigger-section">
        <Trigger fetchData={getData}></Trigger>
      </div>
      {mealInfo && (
        <>
          <div className="recipie">
            <div className="left-section">
              <IngredientsDetails data={mealInfo}></IngredientsDetails>
            </div>
            <div className="right-section">
              <span className="title"> {mealInfo.strMeal}</span>
              <p>{mealInfo.strInstructions}</p>
            </div>
          </div>

          <div className="video-section">
            <h5 className="title">Video Recipe</h5>
            <MealVideo videoUrl={mealInfo.strYoutube}></MealVideo>
          </div>
        </>
      )}
    </div>
  );
}

export default MealContainer;

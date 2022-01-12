import React from "react";

function IngredientsDetails({ data }) {
  const renderListIngredients = () => {
    const ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = data[`strIngredient${i}`];
      if (ingredient) {
        ingredientsList.push({
          ingredient: data[`strIngredient${i}`],
          measure: data[`strMeasure${i}`],
        });
      }
    }
    return (
      <>
        <ul>
          {ingredientsList.map((detailRecipie) => {
            return (
              <li>
                {detailRecipie.ingredient} - {detailRecipie.measure}{" "}
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  return (
    <div className="ingredient-details">
      <img src={data.strMealThumb} alt="meal-image"></img>
      <p ><b>Category:</b> {data.strCategory}</p>
      <p > <b>Area:</b> {data.strArea}</p>
      <div>
        <span className="title">Ingredients: </span>
        <div>{renderListIngredients()}</div>
      </div>
    </div>
  );
}

export default IngredientsDetails;

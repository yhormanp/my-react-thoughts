import React from "react";

function Trigger({fetchData}) {
    
  return (
    <div>
      <p className="title">Feeling hungry ?</p>
      <p className="subtitle">Get a random meal by clicking below</p>
      <button className="btn-meal" onClick={()=> fetchData()}>Get Meal</button>
    </div>
  );
}

export default Trigger;

import React, { useState } from "react";
import Celsius from "./Celsius";
import Farenheit from "./Farenheit";
import './styles.css'

function Container() {
  const [typeConversion, setTypeConversion] = useState("farenheit");
  const [valueConvert, setValueConvert] = useState(0);

  const baseTemperature = { celsius: 0, farenheit: 0 };
  const [temperature, setTemperature] = useState(baseTemperature);

  const calculate = () => {
    let temperatureValue = { ...baseTemperature };

    if (typeConversion === "farenheit") {
      //celsius to farenheit
      temperatureValue["farenheit"] = (parseInt(valueConvert) * 9) / 5 + 32;
      temperatureValue["celsius"] = parseInt(valueConvert);
    } else {
      // farenheit to celsius
      temperatureValue["celsius"] = ((parseInt(valueConvert) - 32) * 5) / 9;
      temperatureValue["farenheit"] = parseInt(valueConvert);
    }

    setTemperature(temperatureValue);

    console.log(temperatureValue);
  };

  const onTypeChange = (e) => {
    setTypeConversion(e.target.value);
    // cons

    console.log(e.target.value);
  };

  const onInputChange = (e) => {
    setValueConvert(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="divAsColumn">
      <label>Temperatura </label>
      <input className="inputCtrl centered" type="text" onChange={(e) => onInputChange(e)}></input>
      <select className="selectCtrl centered" value={typeConversion} onChange={(e) => onTypeChange(e)}>
        <option value="celsius">celsius</option>
        <option value="farenheit">farenheit</option>
      </select>
      <button className="button centered" onClick={calculate}> Convert </button>
      <div className="containerSub">
        <div className="subComponent">
          <span>Celsius</span>
          <Celsius value={temperature.celsius}></Celsius>
        </div>

        <div className="subComponent" >
          <span>Farenheit</span>
          <Farenheit value={temperature.farenheit}></Farenheit>
        </div>
      </div>
    </div>
  );
}

export default Container;

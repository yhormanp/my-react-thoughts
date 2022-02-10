import React, { memo, useMemo, useState, useCallback } from "react";

function Swatch({ params, onClick, index }) {
  console.log(`Swatch ${index} rendered ${params.color}`);
  return (
    <div
      style={{ width: 75, height: 75, margin: 15 , backgroundColor: params.color }}
      onClick={onClick}
    ></div>
  );
}

const MemoedSwatch = memo(Swatch);

function MemoizationContainer() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red");
  console.log(`App rendered ${appRenderIndex}`);

  const params = useMemo(() => ({ color }), [color]);
  const onClick = useCallback(() => {}, []) // empty square bracktes to create it only once

  return (
    <div>
      <div>
        <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
          Re -render app
        </button>
        <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
          change color
        </button>
      </div>
      <div>
        {/* <Swatch color="red"></Swatch> */}
        I am swatch 1
        <MemoedSwatch index="1" params={params} onClick={() => {}}></MemoedSwatch>
        I am swatch 2
        <MemoedSwatch index="2" params={params} onClick={onClick}></MemoedSwatch>
      </div>
    </div>
  );
}

export default MemoizationContainer;

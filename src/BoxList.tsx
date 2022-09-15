import React, { useState } from "react";
import Box, { BoxStyle } from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList(): JSX.Element {
  const [boxen, setBoxen] = useState([
    { width: "20px", height: "60px", color: "red" },
  ]);

  const addBox = (box: BoxStyle) => setBoxen((oldBoxen) => [...oldBoxen, box]);

  return (
    <div className="BoxList">
      {boxen.map((box) => (
        <Box width={box.width} height={box.height} color={box.color} />
      ))}
      <NewBoxForm add={addBox} />
    </div>
  );
}

export default BoxList;

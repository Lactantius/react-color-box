import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box, { BoxStyle } from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList(): JSX.Element {
  const [boxen, setBoxen] = useState([
    { width: "20px", height: "60px", color: "#ff0000", id: uuid() },
  ]);

  const addBox = (box: BoxStyle) =>
    setBoxen((oldBoxen) => [...oldBoxen, { ...box, id: uuid() }]);

  return (
    <div className="BoxList">
      {boxen.map((box) => (
        <Box
          width={box.width}
          height={box.height}
          color={box.color}
          key={box.id}
        />
      ))}
      <NewBoxForm add={addBox} />
    </div>
  );
}

export default BoxList;

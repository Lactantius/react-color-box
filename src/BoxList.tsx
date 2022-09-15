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

  const removeBox = (id: string) =>
    setBoxen((oldBoxen) => oldBoxen.filter((box) => id !== box.id));

  return (
    <div className="BoxList">
      {boxen.map((box) => (
        <Box
          key={box.id}
          width={box.width}
          height={box.height}
          color={box.color}
          id={box.id}
          remove={removeBox}
        />
      ))}
      <NewBoxForm add={addBox} />
    </div>
  );
}

export default BoxList;

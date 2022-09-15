import React, { useState } from "react";
import Box from "./Box";

function BoxList(): JSX.Element {
  const [boxen, setBoxen] = useState([
    { width: "20px", height: "60px", color: "red" },
  ]);

  return (
    <div className="BoxList">
      {boxen.map((box) => (
        <Box width={box.width} height={box.height} color={box.color} />
      ))}
    </div>
  );
}

export default BoxList;

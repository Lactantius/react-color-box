import React from "react";

interface BoxStyle {
  width: string;
  height: string;
  color: string;
  id?: string;
}

function Box({ width, height, color }: BoxStyle): JSX.Element {
  return (
    <div
      className="Box"
      style={{ width: width, height: height, backgroundColor: color }}
    ></div>
  );
}

export default Box;
export type { BoxStyle };

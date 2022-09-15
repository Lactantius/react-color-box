import React from "react";

interface BoxStyle {
  width: string;
  height: string;
  color: string;
  id?: string;
}

interface BoxArgs extends BoxStyle {
  remove: Function;
}

function Box({ width, height, color, id, remove }: BoxArgs): JSX.Element {
  return (
    <div
      className="Box"
      id={id}
      style={{ width: width, height: height, backgroundColor: color }}
    >
      <button onClick={() => remove(id)}>X</button>
    </div>
  );
}

export default Box;
export type { BoxStyle };

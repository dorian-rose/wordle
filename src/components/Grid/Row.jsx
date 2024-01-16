import React from "react";
import { Tile } from "./Tile";

export const Row = (props) => {
  const colNums = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-row justify-center items-center">
      {colNums.map((item, index) => (
        <Tile rowId={props.id} key={item} id={index} />
      ))}
    </div>
  );
};

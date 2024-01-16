import React from "react";
import { Row } from "./Row";

export const Grid = () => {
  const rowNums = [1, 2, 3, 4, 5, 6];

  return (
    <div className="m-4">
      {rowNums.map((item, index) => (
        <Row key={item} id={index} />
      ))}
    </div>
  );
};

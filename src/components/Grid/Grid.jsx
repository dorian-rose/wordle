import React from "react";
import { Row } from "./Row";

export const Grid = () => {
  const rowNums = [1, 2, 3, 4, 5, 6];

  return (
    <div className="grid grid-rows-5 gap-4 my-8">
      {/* {rowNums.map((item, index) => (
        <Row key={item} id={index} />
      ))} */}
      <Row word="hello" />
      <Row word="sweat" />
      <Row word="llret" />
      <Row word="zaine" />
      <Row word="stare" />
      <Row word="dog" />
    </div>
  );
};

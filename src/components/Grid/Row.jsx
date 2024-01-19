import React, { useEffect, useState } from "react";
import { Tile } from "./Tile";

export const Row = ({ word = "", result = [] }) => {
  const lettersRemaining = 5 - word.length;
  const letters = word.split("").concat(Array(lettersRemaining).fill(""));

  return (
    <div className="grid grid-cols-5 gap-4 mx-2">
      {letters.map((char, index) => (
        <Tile key={index} value={char} classState={result[index]} />
      ))}
    </div>
  );
};

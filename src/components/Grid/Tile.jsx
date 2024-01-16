import React, { useState } from "react";

export const Tile = (props) => {
  const [letter, setLetter] = useState("");
  const [filled, setFilled] = useState(true);
  const [colors, setColors] = useState({ bg: "white", font: "black" });

  return (
    <div className="flex justify-center my-[2px] m-[2px] items-center w-[62px] border-2">
      <p className="flex h-12 self-center mb-2 font-bold text-5xl">k</p>
    </div>
  );
};

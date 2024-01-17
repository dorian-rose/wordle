import React, { useEffect, useState } from "react";

export const Tile = ({ value, classState }) => {
  const [letter, setLetter] = useState("");
  const [filled, setFilled] = useState(true);

  return (
    <div
      className={`${
        classState === "match"
          ? "bg-green-500 text-white border-green-500"
          : classState === "present"
          ? "bg-yellow-500 text-white border-yellow-500"
          : "bg-gray-100"
      } flex justify-center items-center h-14 w-16 border-2 rounded-md`}
    >
      <p className="flex  self-center  font-bold text-3xl">{value}</p>
    </div>
  );
};

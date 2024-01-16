import React from "react";

export const Keys = (props) => {
  //   if (props.bigKey) {
  //     return (
  //       <button
  //         className="!w-36 h-14 m-1 rounded-md grid place-items-center text-base bg-gray-300 text-black cursor-pointer font-bold"
  //         // onClick={() => handleClickBigKey()}
  //       >
  //         {props.letter}
  //       </button>
  //     );
  //   }

  return (
    <button
      //onClick={() => guessTheWord(props.letter)}
      className={`${
        props.bigKey ? "w-20" : "w-16"
      } h-14 m-1 rounded-md grid place-items-center text-base bg-gray-300 text-black cursor-pointer font-bold`}
    >
      {props.letter}
    </button>
  );
};

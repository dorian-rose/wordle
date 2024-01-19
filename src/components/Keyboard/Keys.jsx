import { useSelector } from "react-redux";

export const Keys = (props) => {
  const { onClick, letter, bigKey, pd } = props;
  const { keyboard } = useSelector((state) => state.guesses);
  const keyState = keyboard[letter];

  // classname conditionals can be refactored for readability
  return (
    <button
      onClick={(ev) => onClick(ev)}
      className={`${bigKey ? "px-1" : "w-10 sm:w-20 capitalize"} ${
        pd ? "px-3" : ""
      } h-10 m-1 rounded-md grid place-items-center text-base  text-black cursor-pointer font-bold shadow-xl ${
        keyState === "match"
          ? "bg-green-500 text-white border-green-500"
          : keyState === "present"
          ? "bg-yellow-500 text-white border-yellow-500"
          : keyState === "miss"
          ? "bg-gray-400 border-gray-400"
          : "bg-gray-300"
      }`}
    >
      {letter}
    </button>
  );
};

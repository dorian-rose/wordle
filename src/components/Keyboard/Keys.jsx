import { useSelector } from "react-redux";

export const Keys = (props) => {
  const { onClick, letter, bigKey } = props;
  const { keyboard } = useSelector((state) => state.guesses);
  const keyState = keyboard[letter];

  // classname conditionals can be refactored for readability
  return (
    <button
      onClick={(ev) => onClick(ev)}
      className={`${
        bigKey ? "w-20" : "w-16 capitalize"
      } h-14 m-1 rounded-md grid place-items-center text-base  text-black cursor-pointer font-bold ${
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

import { useDispatch } from "react-redux";
import { setGuesses } from "../../store/slice/guesses/guessesSlice";

export const GiveUpButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setGuesses({ guesses: [], gameState: "lost", keyboard: {} }));
  };
  return (
    <button
      className="flex px-1 py-0 bg-red-400 text-white"
      onClick={handleClick}
    >
      Give Up
    </button>
  );
};

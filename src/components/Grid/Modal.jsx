import { setGuesses } from "../../store/slice/guesses/guessesSlice";
import { useDispatch, useSelector } from "react-redux";

export const Modal = ({ setGuess, gameState }) => {
  const dispatch = useDispatch();
  const { answer } = useSelector((state) => state.answer);
  return (
    <div
      className="absolute bg-white border border-gray-500 rounded text-center
            w-11/12 h-1/2 p-6 left-0 right-0 mx-auto top-1/4
           grid grid-rows-4"
      role="modal"
    >
      Game over! You {gameState}!
      {gameState === "won"
        ? `You correctly guessed "${answer}"!!`
        : `The correct answer was "${answer}".`}
      <button
        className="border border-green-500 rounded bg-green-500 p-2 mt-4 text-gray-800 shadow"
        onClick={() => {
          dispatch(setGuesses({ guesses: [], gameState: "playing" }));
          setGuess("");
          //new word logic
        }}
      >
        New Game
      </button>
    </div>
  );
};

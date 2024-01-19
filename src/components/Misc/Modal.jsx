import { setGuesses } from "../../store/slice/guesses/guessesSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../../store/slice/answer/answerThunk";

export const Modal = ({ setGuess, gameState }) => {
  const dispatch = useDispatch();
  const { answer } = useSelector((state) => state.answer);

  const handleClick = () => {
    dispatch(setGuesses({ guesses: [], gameState: "playing", keyboard: {} }));
    setGuess("");
    const url = import.meta.env.VITE_WORD_URL;
    dispatch(getAnswer(url));
  };

  return (
    <div
      className="absolute bg-white border border-gray-500 rounded-xl text-center
            w-11/12 h-48 p-6 left-0 right-0 mx-auto top-1/4 text-xl"
      role="modal"
    >
      <p>
        {gameState === "won"
          ? `Game over! You won!! You correctly guessed `
          : `Game over! You lost 😔 The correct answer was `}
        <span className="capitalize font-bold">{`"${answer}"!!`}</span>
      </p>
      <button
        className="block mx-auto border border-green-500 rounded bg-green-500 p-2 mt-4 text-gray-800 shadow"
        onClick={handleClick}
      >
        New Game
      </button>
    </div>
  );
};

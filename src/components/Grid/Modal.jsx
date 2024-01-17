import { setGuesses } from "../../store/slice/guesses/guessesSlice";
import { useDispatch } from "react-redux";

export const Modal = ({ setGuess }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="absolute bg-white border border-gray-500 rounded text-center
            w-11/12 h-1/2 p-6 left-0 right-0 mx-auto top-1/4
           grid grid-rows-4"
      role="modal"
    >
      Game over!
      <button
        className="border border-green-500 rounded bg-green-500 p-2 mt-4 text-gray-800 shadow"
        onClick={() => {
         s
          dispatch(setGuesses([]));
          setGuess("");
          //new word logic
        }}
      >
        New Game
      </button>
    </div>
  );
};
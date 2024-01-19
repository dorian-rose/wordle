import { Row } from "./Row";
import { useSelector } from "react-redux";
import { Modal } from "../Misc/Modal";

export const Grid = ({ guess, setGuess }) => {
  //retrieve guesses from state
  const { guesses, gameState } = useSelector((state) => state.guesses);

  let rows = [...guesses];

  //add guess in progress to rows array so that it can be rendered in Row.js
  if (rows.length < 6) {
    rows.push({ guessWord: guess });
  }

  //make sure there are always six rows, so as to display full grid
  const guessesRemaining = 6 - rows.length;
  rows = rows.concat(Array(guessesRemaining).fill(""));

  return (
    <section className="mx-auto max-w-80 sm:max-w-md sm:mx-auto">
      <div className="grid grid-rows-5 gap-4 my-6 sm:my-10 mx-10 sm:mx-0">
        {rows.map((word, index) => (
          <Row key={index} word={word.guessWord} result={word.result} />
        ))}
      </div>

      {gameState !== "playing" && (
        <Modal setGuess={setGuess} gameState={gameState} />
      )}
    </section>
  );
};

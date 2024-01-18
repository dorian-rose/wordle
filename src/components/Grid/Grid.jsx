import { Row } from "./Row";
import { useSelector } from "react-redux";
import { Modal } from "./Modal";

export const Grid = ({ guess, setGuess }) => {
  //retrieve guesses from state
  const { guesses, gameState } = useSelector((state) => state.guesses);

  let rows = [...guesses];

  //concatenate the current guess so that letters can be passed to row and rendered
  let currentRow = 0;
  if (rows.length < 6) {
    currentRow = rows.push({ guessWord: guess }) - 1;
  }

  //make sure there are always six rows, so as to display full grid
  const guessesRemaining = 6 - rows.length;
  rows = rows.concat(Array(guessesRemaining).fill(""));

  return (
    <>
      <div className="grid grid-rows-5 gap-4 my-14">
        {rows.map((word, index) => (
          <Row key={index} word={word.guessWord} result={word.result} />
        ))}
      </div>

      {gameState !== "playing" && (
        <Modal setGuess={setGuess} gameState={gameState} />
      )}
    </>
  );
};

import { useState } from "react";
import { Row } from "./Row";
import { useSelector } from "react-redux";
import { Modal } from "./Modal";

export const Grid = ({ guess, setGuess }) => {
  //retrieve guesses from state
  const { guesses, gameState } = useSelector((state) => state.guesses);

  //on input of text
  // const handleChange = (ev) => {
  //   const newGuess = ev.target.value;
  //   if (newGuess.length === 5) {
  //     //dispatch via getGuesses to mark guess, then dispatch to state
  //     dispatch(getGuesses(newGuess, answer));
  //     //reset the input
  //     setGuess("");
  //     return;
  //   }
  //   setGuess(newGuess);
  // };

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
      <div>
        {/* <input
          type="text"
          id="guess"
          name="guess"
          value={guess}
          onChange={(ev) => handleChange(ev)}
          disabled={gameState !== "playing"}
        /> */}
        <div className="grid grid-rows-5 gap-4 my-8">
          {rows.map((word, index) => (
            <Row key={index} word={word.guessWord} result={word.result} />
          ))}
        </div>
      </div>
      {gameState !== "playing" && (
        <Modal setGuess={setGuess} gameState={gameState} />
      )}
    </>
  );
};

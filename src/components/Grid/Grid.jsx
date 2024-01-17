import { useState } from "react";
import { Row } from "./Row";
import { getGuesses } from "../../store/slice/guesses/thunk";
import { useSelector, useDispatch } from "react-redux";

export const Grid = () => {
  const dispatch = useDispatch();
  //retrieve guesses from state
  const { answer } = useSelector((state) => state.answer);
  const { guesses } = useSelector((state) => state.guesses);
  console.log(guesses);
  //guesses from input
  const [guess, setGuess] = useState("");

  const handleChange = (ev) => {
    console.log(ev.target.value);
    const newGuess = ev.target.value;
    if (newGuess.length === 5) {
      dispatch(getGuesses(newGuess, answer));
      //dispatch(setGuesses(newGuess));
      setGuess("");
      return;
    }
    setGuess(newGuess);
  };

  let rows = [...guesses];
  console.log(rows.length);
  let currentRow = 0;
  if (rows.length < 6) {
    currentRow = rows.push({ guessWord: guess }) - 1;
  }

  const guessesRemaining = 6 - rows.length;

  rows = rows.concat(Array(guessesRemaining).fill(""));
  console.log("rows concat", rows);
  return (
    <div>
      <input
        type="text"
        id="guess"
        name="guess"
        value={guess}
        onChange={(ev) => handleChange(ev)}
        required
      />
      <div className="grid grid-rows-5 gap-4 my-8">
        {rows.map((word, index) => (
          <Row key={index} word={word.guessWord} result={word.result} />
        ))}
      </div>
    </div>
  );
};

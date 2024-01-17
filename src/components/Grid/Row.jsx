import React, { useEffect, useState } from "react";
import { Tile } from "./Tile";
import { markGuess } from "../../helpers/markGuess";

export const Row = ({ word, result }) => {
  //const colNums = [1, 2, 3, 4, 5];
  const answerWord = "hello";
  const [letterScoreStates, setLetterScoreStates] = useState([]);

  //end temp

  const lettersRemaining = 5 - word.length;
  const letters = word.split("").concat(Array(lettersRemaining).fill(""));

  useEffect(() => {
    //calculate accuracy of guessed word
    const letterScores = markGuess(word, answerWord);
    setLetterScoreStates(letterScores);
  }, []);
  console.log(letterScoreStates);
  return (
    <div className="grid grid-cols-5 gap-4 ">
      {/* {colNums.map((item, index) => (
        <Tile rowId={props.id} key={index} id={index} />
      ))} */}
      {letters.map((char, index) => (
        <Tile key={index} value={char} classState={letterScoreStates[index]} />
      ))}
    </div>
  );
};

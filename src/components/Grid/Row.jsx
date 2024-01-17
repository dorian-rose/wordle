import React, { useEffect, useState } from "react";
import { Tile } from "./Tile";
import { markGuess } from "../../helpers/markGuess";
import { useDispatch, useSelector } from "react-redux";

export const Row = ({ word = "", result = [] }) => {
  const { answer } = useSelector((state) => state.answer);
  const answerWord = answer;

  //const [letterScoreStates, setLetterScoreStates] = useState([]);

  //end temp
  console.log(word);
  const lettersRemaining = 5 - word.length;
  const letters = word.split("").concat(Array(lettersRemaining).fill(""));

  // useEffect(() => {
  //   //calculate accuracy of guessed word
  //   const letterScores = markGuess(word, answerWord);
  //   setLetterScoreStates(letterScores);
  // }, []);

  return (
    <div className="grid grid-cols-5 gap-4 ">
      {/* {colNums.map((item, index) => (
        <Tile rowId={props.id} key={index} id={index} />
      ))} */}
      {letters.map((char, index) => (
        <Tile key={index} value={char} classState={result[index]} />
      ))}
    </div>
  );
};

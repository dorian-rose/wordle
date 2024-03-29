import { Tile } from "./Tile";

export const Row = ({ word = "", result = [] }) => {
  //ensure array always has length of 5 for renderization
  const lettersRemaining = 5 - word.length;
  const letters = word.split("").concat(Array(lettersRemaining).fill(""));

  return (
    <div className="grid place-items-center grid-cols-5 gap-4 mx-2">
      {letters.map((char, index) => (
        <Tile key={index} value={char} classState={result[index]} />
      ))}
    </div>
  );
};

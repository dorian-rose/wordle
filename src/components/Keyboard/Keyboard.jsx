import { FaDeleteLeft } from "react-icons/fa6";
import { Keys } from "./Keys";

export const Keyboard = ({ onButtonClick }) => {
  const kbRow1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const kbRow2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const kbRow3 = ["z", "x", "c", "v", "b", "n", "m"];

  const onClick = (ev) => {
    const letter = ev.currentTarget.textContent;
    if (letter === "") {
      onButtonClick("Backspace");
    } else {
      onButtonClick(letter);
    }
  };

  const Set1 = () => {
    return (
      <div className="flex flex-row justify-center m-0">
        {kbRow1.map((char, index) => (
          <Keys onClick={onClick} key={char} letter={char} />
        ))}
      </div>
    );
  };

  const Set2 = () => {
    return (
      <div className="flex flex-row justify-center m-0">
        {kbRow2.map((char, index) => (
          <Keys onClick={onClick} key={char} letter={char} />
        ))}
      </div>
    );
  };

  const Set3 = () => {
    return (
      <div className="flex flex-row justify-center">
        <Keys onClick={onClick} bigKey={true} letter={"Enter"} />
        {kbRow3.map((char, index) => (
          <Keys onClick={onClick} key={char} letter={char} />
        ))}
        <Keys onClick={onClick} bigKey={true} letter={<FaDeleteLeft />} />
      </div>
    );
  };

  return (
    <div>
      <Set1 />
      <Set2 />
      <Set3 />
    </div>
  );
};

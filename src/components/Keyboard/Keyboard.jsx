import { FaDeleteLeft } from "react-icons/fa6";
import { Keys } from "./Keys";

export const Keyboard = ({ onButtonClick }) => {
  const kbRow1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const kbRow2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const kbRow3 = ["z", "x", "c", "v", "b", "n", "m"];

  //capture letter from key of keyboard ui
  const onClick = (ev) => {
    const letter = ev.currentTarget.textContent;
    //backspace icon has no textContent
    if (letter === "") {
      onButtonClick("Backspace");
    } else {
      onButtonClick(letter);
    }
  };

  const Set1 = () => {
    return (
      <div className="flex flex-row justify-center m-0">
        {kbRow1.map((char) => (
          <Keys onClick={onClick} key={char} letter={char} />
        ))}
      </div>
    );
  };

  const Set2 = () => {
    return (
      <div className="flex flex-row justify-center sm:my-3 mx-2 sm:mx-4">
        {kbRow2.map((char) => (
          <Keys onClick={onClick} key={char} letter={char} />
        ))}
      </div>
    );
  };

  const Set3 = () => {
    return (
      <div className="flex flex-row justify-center">
        <Keys onClick={onClick} bigKey={true} letter={"Enter"} />
        {kbRow3.map((char) => (
          <Keys onClick={onClick} key={char} letter={char} />
        ))}
        <Keys
          onClick={onClick}
          pd={true}
          bigKey={true}
          letter={<FaDeleteLeft />}
        />
      </div>
    );
  };

  return (
    <section>
      <Set1 />
      <Set2 />
      <Set3 />
    </section>
  );
};

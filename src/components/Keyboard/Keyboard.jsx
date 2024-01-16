import { FaDeleteLeft } from "react-icons/fa6";
import { Keys } from "./Keys";

export const Keyboard = () => {
  const kbRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const kbRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const kbRow3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const Set1 = () => {
    return (
      <div className="flex flex-row justify-center m-0">
        {kbRow1.map((char, index) => (
          <Keys key={char} letter={char} />
        ))}
      </div>
    );
  };

  const Set2 = () => {
    return (
      <div className="flex flex-row justify-center m-0">
        {kbRow2.map((char, index) => (
          <Keys key={char} letter={char} />
        ))}
      </div>
    );
  };

  const Set3 = () => {
    return (
      <div className="flex flex-row justify-center">
        <Keys bigKey={true} letter={"Enter"} />
        {kbRow3.map((char, index) => (
          <Keys key={char} letter={char} />
        ))}
        <Keys bigKey={true} letter={<FaDeleteLeft />} />
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

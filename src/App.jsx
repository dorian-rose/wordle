import { useEffect } from "react";
import "./App.css";
import { Grid } from "./components/Grid/Grid";
import { getAnswer } from "./store/slice/answer/answerThunk";
import { Keyboard } from "./components/Keyboard/Keyboard";
import { useGuess } from "./hooks/useGuess";
import { useDispatch, useSelector } from "react-redux";
import { GiveUpButton } from "./components/Misc/GiveUpButton";
import { ErrorMsg } from "./components/Misc/ErrorMsg";

function App() {
  const dispatch = useDispatch();
  const { valid } = useSelector((state) => state.valid);

  const { guess, setGuess, addGuessLetter, invalid, setInvalid } = useGuess();

  useEffect(() => {
    const url = import.meta.env.VITE_WORD_URL;
    dispatch(getAnswer(url));
  }, []);

  return (
    <>
      <div className="mx-auto w-96 relative">
        <header className="border-b border-gray-400 py-4">
          <GiveUpButton />
          <h1 className="text-5xl font-bold text-center uppercase mt-4 ">
            Wordle
          </h1>
        </header>
        <main>
          {valid !== "valid" && <ErrorMsg message={valid} />}
          <Grid guess={guess} setGuess={setGuess} />
          <Keyboard
            onButtonClick={(letter) => {
              addGuessLetter(letter);
            }}
          />
        </main>
      </div>
    </>
  );
}

export default App;

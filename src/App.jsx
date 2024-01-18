import { useEffect } from "react";
import "./App.css";
import { Grid } from "./components/Grid/Grid";
import { getAnswer } from "./store/slice/answer/answerThunk";
import { Keyboard } from "./components/Keyboard/Keyboard";
import { useGuess } from "./hooks/useGuess";
import { useDispatch, useSelector } from "react-redux";
import { GiveUpButton } from "./components/Misc/GiveUpButton";

function App() {
  const dispatch = useDispatch();
  // const { answer } = useSelector((state) => state.answer);

  const { guess, setGuess, addGuessLetter } = useGuess();

  useEffect(() => {
    const url = import.meta.env.VITE_WORD_URL;
    dispatch(getAnswer(url));
  }, []);

  return (
    <>
      <div className="mx-auto w-96 relative">
        <header className="border-b border-gray-400 py-4">
          <GiveUpButton />
          <h1 className="text-3xl font-bold text-center uppercase">Wordle</h1>
        </header>
        <main>
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

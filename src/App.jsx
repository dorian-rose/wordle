import { useEffect } from "react";
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
  const { isLoading } = useSelector((state) => state.guesses);
  const { guess, setGuess, addGuessLetter } = useGuess();

  useEffect(() => {
    const url = import.meta.env.VITE_WORD_URL;
    dispatch(getAnswer(url));
  }, []);

  return (
    <>
      <div className="mx-auto w-96 relative  w-screen sm:max-w-screen-md sm:my-8">
        <header className="border-b border-gray-400 py-4 sm:max-w-md mx-auto">
          <GiveUpButton />
          <h1 className="text-3xl sm:text-5xl font-bold text-center uppercase mt-4 ">
            Wordle
          </h1>
        </header>
        <main>
          {valid !== "valid" && <ErrorMsg message={valid} />}
          {isLoading && (
            <div className="w-[200px] h-[200px] absolute z-[5] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />
            </div>
          )}
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

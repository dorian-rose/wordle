import "./App.css";
import { Grid } from "./components/Grid/Grid";
import { Modal } from "./components/Grid/Modal";
import { Keyboard } from "./components/Keyboard/Keyboard";

function App() {
  return (
    <>
      <div className="mx-auto w-96 relative">
        <header className="border-b border-gray-400 py-4">
          <h1 className="text-3xl font-bold text-center uppercase">Wordle</h1>
        </header>
        <main>
          <Grid />
          <Keyboard />
        </main>
      </div>
    </>
  );
}

export default App;

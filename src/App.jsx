import "./App.css";
import { Grid } from "./components/Grid/Grid";

function App() {
  return (
    <>
      <div className="mx-auto w-96">
        <h1 className="text-xl text-center">Wordle</h1>
        <Grid />
      </div>
    </>
  );
}

export default App;

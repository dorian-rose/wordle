import { setGuesses } from "./guessesSlice"
// import { markGuess } from "../../../helpers/markGuess";
import { computeGuess } from "../../../helpers/computeGuess";


export const getGuesses = (guessWord, answer) => {

    return async (dispatch, getState) => {
        let newState;
        let newKeyboard;
        let gameState = "playing"
        try {
            const currentState = getState();
            const currentGuesses = currentState.guesses.guesses

            //get guess result 
            const result = await computeGuess(guessWord, answer);

            //make new guess result object
            const newGuessResult = {
                guessWord,
                result,
            };


            //new state to be dispatched
            newState = [...currentGuesses, newGuessResult]

            //calculate game state
            const didWin = result.every((r) => r === "match")

            if (didWin) {
                gameState = "won"
            } else if (newState.length === 6) {
                gameState = "lost"
            }

            //calculate keyboard letter state
            const currentKeyboard = currentState.guesses.keyboard
            newKeyboard = { ...currentKeyboard }

            result.forEach((r, index) => {
                const letterInResult = guessWord[index];

                const currentLetterState = newKeyboard[letterInResult];
                switch (currentLetterState) {
                    case "match":
                        break;
                    case "present":
                        if (r === "miss") {
                            break;
                        }
                    default:
                        newKeyboard[letterInResult] = r;
                        break;
                }
            });

        } catch (error) {
            console.log('FAILED to compute guess', error)
            return error
        }

        dispatch(setGuesses({ guesses: newState, gameState, keyboard: newKeyboard }))
    }


}
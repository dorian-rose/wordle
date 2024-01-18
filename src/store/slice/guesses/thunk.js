import { setGuesses } from "./guessesSlice"
import { markGuess } from "../../../helpers/markGuess";



export const getGuesses = (guessWord, answer) => {

    return async (dispatch, getState) => {
        let newState;
        let gameState = "playing"
        try {
            const currentState = getState();
            const currentGuesses = currentState.guesses.guesses

            //get guess result 
            const result = await markGuess(guessWord, answer);

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

        } catch (error) {
            console.log('FAILED to compute guess', error)
            return error
        }

        dispatch(setGuesses({ guesses: newState, gameState }))
    }


}
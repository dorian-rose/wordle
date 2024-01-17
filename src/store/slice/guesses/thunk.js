import { setGuesses } from "./guessesSlice"
import { markGuess } from "../../../helpers/markGuess";



export const getGuesses = (guessWord, answerWord) => {

    return async (dispatch, getState) => {
        let newState;
        try {
            const currentState = getState();
            const currentGuesses = currentState.guesses.guesses
            console.log(currentGuesses)
            //get guess result 
            const result = await markGuess(guessWord, answerWord);
            console.log("response", result)
            //make new guess result object
            const newGuessResult = {
                guessWord,
                result,
            };

            newState = [...currentGuesses, newGuessResult]

        } catch (error) {
            console.log('FAILED to compute guess', error)
            return error
        }

        dispatch(setGuesses(newState))
    }


}
import { useState, useEffect, useRef } from 'react'
import { getGuesses } from "../store/slice/guesses/thunk";
import { useSelector, useDispatch } from "react-redux";
import { setValid } from '../store/slice/validate/validSlice';

export const useGuess = () => {
    const dispatch = useDispatch();
    //ensure that current state will be sent in addGuessLetter
    const answerRef = useRef();
    const { answer } = useSelector((state) => state.answer);
    answerRef.current = answer;

    const [guess, setGuess] = useState("");

    const addGuessLetter = (letter) => {
        setGuess((curGuess) => {

            let newGuess;
            if (letter.length === 1 && curGuess.length !== 5) {
                //add key letter to current letters 
                newGuess = curGuess + letter
            } else {
                // current letters remain the same 
                newGuess = curGuess
            }

            //manage back and enter buttons
            switch (letter) {
                case "Backspace":
                    return newGuess.slice(0, -1);
                case "Enter":
                    if (newGuess.length === 5) {
                        //dispatc to validate and save in state, clear current letters
                        dispatch(getGuesses(newGuess, answerRef.current));
                        return "";
                    } else {
                        dispatch(setValid("Word must have five letters"))
                    }
            }
            return newGuess;
        });


    };

    const onKeyDown = (e) => {
        let letter = e.key;
        addGuessLetter(letter);
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    return { guess, setGuess, addGuessLetter };
}

import { useState, useEffect } from 'react'
import { getGuesses } from "../store/slice/guesses/thunk";
import { useSelector, useDispatch } from "react-redux";

export const useGuess = () => {
    const dispatch = useDispatch();
    const { answer } = useSelector((state) => state.answer);
    const [guess, setGuess] = useState("");

    const addGuessLetter = (letter) => {
        console.log(`"${letter}"`)
        setGuess((curGuess) => {
            //control that when 5 letters entered (row complete) guess state does not update
            let newGuess;
            if (letter.length === 1 && curGuess.length !== 5) {
                //add key letter to current letters 
                newGuess = curGuess + letter
            } else {
                // current letters remain the same 
                newGuess = curGuess
            }
            console.log(newGuess)
            //manage back and enter buttons
            switch (letter) {
                case "Backspace":
                    return newGuess.slice(0, -1);
                case "Enter":
                    if (newGuess.length === 5) {
                        console.log("here")
                        //dispatc to validate and save in state, clear current letters
                        dispatch(getGuesses(newGuess, answer));
                        return "";
                    } else {
                        //manage alert here 
                    }
            }
            return newGuess;
        });

    };

    const onKeyDown = (e) => {
        let letter = e.key;
        console.log(letter)
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

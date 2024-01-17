import { createSlice } from '@reduxjs/toolkit'
// import { getLocal, setLocal } from "../../../products/helpers/localStorage";


export const guessesSlice = createSlice({


    name: 'guesses',
    initialState: {

        // favouritesArray: getLocal() || [],
        guesses: [],
    },
    reducers: {
        setGuesses: (state, action) => {

            state.guesses = action.payload
            // //  search for empty string - save first index of empty string as emptyIndex
            // const emptyIndex = state.guesses.findIndex(guess => guess === "");

            // // replace the index at emptyIndex with payload 
            // if (emptyIndex !== -1) {
            //     state.guesses[emptyIndex] = action.payload;
            // }
        },
    },

})

export const { setGuesses } = guessesSlice.actions
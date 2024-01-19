import { createSlice } from '@reduxjs/toolkit'
// import { getLocal, setLocal } from "../../../products/helpers/localStorage";


export const guessesSlice = createSlice({


    name: 'guesses',
    initialState: {

        guesses: [],
        gameState: "playing",
        keyboard: {}
    },
    reducers: {
        setGuesses: (state, action) => {

            state.guesses = action.payload.guesses
            state.gameState = action.payload.gameState
            state.keyboard = action.payload.keyboard

        },
    },

})

export const { setGuesses } = guessesSlice.actions
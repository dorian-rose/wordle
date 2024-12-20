import { createSlice } from '@reduxjs/toolkit'
// import { getLocal, setLocal } from "../../../products/helpers/localStorage";


export const guessesSlice = createSlice({

    name: 'guesses',
    initialState: {
        guesses: [],
        gameState: "playing",
        keyboard: {},
        isLoading: false
    },
    reducers: {
        setLoadingProducts: (state, action) => {
            state.isLoading = action.payload;
            console.log(state.isLoading)
        },
        setGuesses: (state, action) => {
            state.guesses = action.payload.guesses
            state.gameState = action.payload.gameState
            state.keyboard = action.payload.keyboard
        },
    },
})

export const { setGuesses, setLoadingProducts } = guessesSlice.actions
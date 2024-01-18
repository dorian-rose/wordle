import { configureStore } from '@reduxjs/toolkit'
import { guessesSlice } from './slice/guesses/guessesSlice'
import { answerSlice } from './slice/answer/answerSlice'


export const store = configureStore({
    reducer: {
        guesses: guessesSlice.reducer,
        answer: answerSlice.reducer
    },
})
import { configureStore } from '@reduxjs/toolkit'
import { guessesSlice } from './slice/guesses/guessesSlice'
import { answerSlice } from './slice/answer/answerSlice'
import { validSlice } from './slice/validate/validSlice'


export const store = configureStore({
    reducer: {
        guesses: guessesSlice.reducer,
        answer: answerSlice.reducer,
        valid: validSlice.reducer
    },
})
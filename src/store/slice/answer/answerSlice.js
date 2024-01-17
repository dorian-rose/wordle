import { createSlice } from '@reduxjs/toolkit'

export const answerSlice = createSlice({

    name: 'answer',
    initialState: {
        answer: "hello",

    },
    reducers: {

        setAnswer: (state, action) => {

            state.answer = action.payload.answer
        }

    }

})

export const { setAnswer } = answerSlice.actions
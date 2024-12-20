import { createSlice } from '@reduxjs/toolkit'

export const validSlice = createSlice({

    name: 'valid',
    initialState: {
        valid: "valid",

    },
    reducers: {

        setValid: (state, action) => {

            state.valid = action.payload
        }

    }

})

export const { setValid } = validSlice.actions
import { createSlice } from '@reduxjs/toolkit'
// import { getLocal, setLocal } from "../../../products/helpers/localStorage";


export const faveSlice = createSlice({


    name: 'favourites',
    initialState: {

        favouritesArray: getLocal() || [],
    },
    reducers: {
        setFavourites: (state, action) => {

            state.favouritesArray = action.payload
        }
    }

})

export const { setFavourites } = faveSlice.actions
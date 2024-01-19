import { setAnswer } from "./answerSlice"
import { dataFetch } from "../../../helpers/fetch"

export const getAnswer = (url, method, body) => {

    return async (dispatch, getState) => {

        const result = await dataFetch(url)

        const [answer] = result;

        dispatch(setAnswer({ answer }))
    }


}
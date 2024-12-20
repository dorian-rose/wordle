import { setAnswer } from "./answerSlice"
import { dataFetch } from "../../../helpers/fetch"

export const getAnswer = (url, method, body) => {

    return async (dispatch, getState) => {

        const result = await dataFetch(url)
        console.log(result)
        const [answer] = result;

        dispatch(setAnswer({ answer }))
    }


}
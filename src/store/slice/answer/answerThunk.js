import { setAnswer } from "./answerSlice"


export const getAnswer = (url, method, body) => {

    return async (dispatch, getState) => {

        //reusable fetch function
        let data;
        let options = {};

        try {
            if (method == "DELETE") {

                options = {
                    method: method,
                    body: JSON.stringify(body),
                    headers: {
                        "Content-type": "application/json",
                    }
                }
            }
            if (method == "PUT" || method == "POST") {

                options = {
                    method: method,
                    body: body
                }
            }
            const response = await fetch(url, options);

            const result = await response.json();
            const [answer] = result;
            data = answer

        } catch (error) {
            console.log('FAILED while fetching', error)
            return error
        }

        dispatch(setAnswer({ answer: data }))
    }


}
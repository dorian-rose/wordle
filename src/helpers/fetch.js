//reusable fetch function
export const dataFetch = async (url, method, body) => {

    let data;

    let options = {};

    try {
        if (method == "DELETE" || method == "POST" || method == "PUT") {

            options = {
                method: method,
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json",
                }
            }
        }

        const response = await fetch(url, options);

        data = await response.json();
        console.log(data)

    } catch (error) {
        console.log('FAILED while fetching', error)
        return error
    }
    return data
}



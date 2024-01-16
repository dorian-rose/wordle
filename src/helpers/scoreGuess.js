

export const scoreGuess = ({ guess, answerString, }) => {
    const result = []

    //if not all five letters have been entered
    if (guess.length !== answerString.length) {
        return result;
    }

    const answerArray = answerString.split('');

    const guessAsArray = guess.split('');

    const answerLetterCount = {};

    //check each letter of guess
    guessAsArray.forEach((letter, index) => {
        const currentAnswerLetter = answer[index];
        //check if the property with the key of the letter that is currentAnswerLetter exists in the answerLetterCount object
        if (answerLetterCount[currentAnswerLetter]) {
            //if exists, increase count by 1
            answerLetterCount[currentAnswerLetter] += 1;
        } else {
            //if doesn´t already exist, create property with this key
            answerLetterCount[currentAnswerLetter] = 1;
        }

        //check if letter in guess matches exists /mathces position in answer
        if (currentAnswerLetter === letter) {
            result.push(LetterState.Match);
        } else if (answer.includes(letter)) {
            result.push(LetterState.Present);
        } else {
            result.push(LetterState.Miss);
        }
    });

    //if current result is other than present, no need to control and can return result
    result.forEach((currentResult, resultIndex) => {
        if (currentResult !== LetterState.Present) {
            return;
        }

        const guessLetter = guessAsArray[resultIndex];

        answer.forEach((currentAnswerLetter, answerIndex) => {
            if (currentAnswerLetter !== guessLetter) {
                return;
            }

            if (result[answerIndex] === LetterState.Match) {
                result[resultIndex] = LetterState.Miss;
            }

            if (answerLetterCount[guessLetter] <= 0) {
                result[resultIndex] = LetterState.Miss;
            }

        })
        answerLetterCount[guessLetter]--;

    });
    return result;
}

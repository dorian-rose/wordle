

export const markGuess = (guessWord, answerWord) => {


    const markedLetters = new Array(answerWord.length).fill("miss");
    const matchedIndices = [];
    console.log(guessWord, answerWord)
    // First pass: Check for matches (correct letter in correct position)
    for (let i = 0; i < answerWord.length; i++) {
        if (answerWord[i] === guessWord[i]) {
            markedLetters[i] = "match";
            matchedIndices.push(i);
        }
    }

    // Second pass: Check for presents (correct letter in the wrong position)
    for (let i = 0; i < guessWord.length; i++) {
        if (!matchedIndices.includes(i)) {
            const indexInAnswer = answerWord.indexOf(guessWord[i]);

            if (indexInAnswer !== -1 && !matchedIndices.includes(indexInAnswer)) {
                markedLetters[i] = 'present';
                matchedIndices.push(indexInAnswer);
            }
        }
    }

    // Second pass: Check for presents (correct letter in the wrong position)
  array.forEach(element => {
      for (let i = 0; i < guessWord.length; i++) {
          if (!matchedIndices.includes(i)) {
              const indexInAnswer = answerWord.indexOf(guessWord[i]);
  
              if (indexInAnswer !== -1 && !matchedIndices.includes(indexInAnswer)) {
                  markedLetters[i] = 'present';
                  matchedIndices.push(indexInAnswer);
              }
          }
      }
  });


    console.log(markedLetters)
    return markedLetters;
}


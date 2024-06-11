# React Word Guess Game

Welcome to the React Word Guess Game! This application is a word guessing game similar to Wordle, where the objective is to guess a randomly selected five-letter word within six attempts. The app provides feedback after each guess, indicating if the guessed word contains letters that are an exact match in both letter and position with the answer word or if they are present but not in the correct position.
Deployed site can be viewed at https://dorians-wordle.netlify.app

## Features

- Random Word Generation: The game uses the Random word API (see https://random-word-api.herokuapp.com/home) to generate a random five-letter word for the user to guess.

- Guess Validation: The user's guessed word is validated, ensuring that the guessed word is present in the list from which random words are selected.

- Feedback System: After each guess, the app provides feedback, indicating which letters in the guessed word are an exact match with the random word, and which letters are present but not in the correct position. Feedback calculates for the existence of duplicate letters in either the user's guess word or the answer word. Feedback on letters also reflected on keyboard UI.

- State Management: The application uses Redux for state management, providing a centralized store to manage the game state, such as the current word to guess, the user's attempts, and feedback information.

## Getting Started

To run the React Word Guess Game locally, follow these steps:

1. Clone the repository: git clone https://github.com/dorian-rose/wordle.git

2. Install dependencies: `yarn `

3. Start the development server: `yarn dev`

4. Open your browser and navigate to http://localhost:5173 to run user interface.

## Testing

The application's functionality is tested using Jest. To run the tests, use the following command:
`yarn test`
More extensive testing will be implemented in further iterations of this project.

## Technologies Used

- React.js
- Redux
- Jest
- Random Word Generator API: https://random-word-api.herokuapp.com/
- Word Validator API: https://wordlist.onrender.com/ + word ToValidate
- Styles implemented using TailwindCSS
- See package.json for futher dependencies used and their versions.

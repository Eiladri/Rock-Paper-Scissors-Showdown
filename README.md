# Rock Paper Scissors — Showdown

## Overview

Rock Paper Scissors — Showdown is a browser-based game built with HTML, CSS and vanilla JavaScript to practice JavaScript concepts. Players choose a move against the computer and track their scores across rounds.

## Live Link

https://eiladri.github.io/Rock-Paper-Scissors-Showdown/

## Features

- Player-versus-computer gameplay with a randomly selected computer move.
- Win, loss and draw detection, with separate player and computer scores.
- Round counter increments only after a played round is reset; both player and computer scores are then cleared.
- Highest completed-round player score saved in browser `localStorage`.
- Responsive layout for different screen sizes.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage`

## External Resources

- Google Fonts

## Project Structure

```text
rock-paper-scissors-showdown-01/
├── assets/
│   ├── globalBg.png
│   └── logo.png
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.

Keep the local assets in their expected relative paths under `assets/`.

## How to Play

1. Select Rock, Paper or Scissors.
2. The computer randomly selects its move.
3. View both moves, the result and the updated scores. A draw does not change either score.
4. Click **Reset** after at least one move to complete the current round and clear both scores.
5. Select another move to begin a new round.

## JavaScript Concepts Implemented

The project uses the following JavaScript concepts:

- **Variables and constants:** `let` and `const` to manage scores, round information, game state and DOM references.
- **Functions and arrow functions:** Reusable functions to handle gameplay, generate computer moves, display choices and determine the winner.
- **DOM manipulation:** Selecting HTML elements and updating their content, text and inline styles dynamically.
- **Event handling:** Using `addEventListener()` to respond to clicks on the move selection and reset buttons.
- **Conditional statements:** `if-else` and ternary operators to evaluate game outcomes and control round behaviour.
- **Arrays and iteration:** An array to store possible computer moves and `forEach()` to attach event listeners to move buttons.
- **Random number generation:** `Math.random()` and `Math.floor()` to generate the computer's move.
- **Browser storage:** `localStorage` to save and retrieve the highest score across page reloads.
- **Type conversion:** `Number()` to convert the stored highest score into a number before comparison.

## Round and Score Behaviour

The round counter starts at zero on each page load. It increases when **Reset** is clicked after at least one move; a round can contain multiple moves. Resetting without playing does not increase the counter and displays a prompt to begin a round.

After a valid reset, the button displays the player's score for the completed round. Clicking it again before another move displays the prompt instead.

The highest score is the largest player score from a completed round, not a lifetime leaderboard. It is loaded from `localStorage` when the page opens and updated on a valid reset if the completed round's player score is higher. It persists across reloads in the same browser; the current scores and round count do not.

## Author

Eiladri 

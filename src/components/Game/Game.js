import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessPanel from "../GuessPanel";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function addGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <GuessPanel guesses={guesses} />
      <GuessForm addGuess={addGuess} />
    </>
  );
}

export default Game;

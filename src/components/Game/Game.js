import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessPanel from "../GuessPanel";
import ResultBanner from "../ResultBanner";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
    const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
    console.info({ answer });

function Game() {
    const [gameState, setGameState] = useState();
    const [guesses, setGuesses] = useState([]);

    function addGuess(guess) {
        var validatedGuess = checkGuess(guess, answer);
        setGuesses([...guesses, validatedGuess]);
    }

    return (
        <>
        <GuessPanel answer={answer} guesses={guesses} />
        <GuessForm addGuess={addGuess} />
        <ResultBanner
        answer={answer}
        attempts={guesses.length}
        gameState={gameState}
        />
        </>
    );
}

export default Game;

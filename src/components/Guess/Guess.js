import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, guess }) {
  if (!guess) {
    return (
      <p className="guess">
        {range(5).map((i) => (
          <span key={i} className="cell"></span>
        ))}
      </p>
    );
  }

  var validatedGuess = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((i) => (
        <span key={i} className={`cell ${validatedGuess[i].status}`}>
          {validatedGuess[i].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;

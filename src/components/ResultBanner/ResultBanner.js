import React from "react";

function ResultBanner({ answer, attempts, gameState, resetGame }) {
  if (!gameState) return null;

  const content =
    gameState === "win" ? (
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{attempts} guesses</strong>.
      </p>
    ) : (
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    );

  return (
    <div className={`${gameState === "win" ? "happy" : "sad"} banner`}>
      <button onClick={resetGame}>Reset Game</button>
      {content}
    </div>
  );
}

export default ResultBanner;

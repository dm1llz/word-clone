import React from "react";

function ResultBanner({ answer, attempts, gameState }) {
  if (gameState === "win") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{attempts} guesses</strong>.
        </p>
      </div>
    );
  } else if (gameState === "lose") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  return null;
}

export default ResultBanner;

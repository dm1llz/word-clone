import React, { useState } from "react";

function GuessForm({ addGuess }) {
  const [guess, setGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    addGuess(guess);

    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        pattern="[A-Z]{5}"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        required
        title="Your guess must be 5 characters"
        type="text"
        value={guess}
      />
    </form>
  );
}

export default GuessForm;

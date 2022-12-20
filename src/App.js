import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling",
  "😂": "laughing",
  "😭": "crying",
  "😚": "kissing",
  "😳": "disbelief",
  "😔": "sad",
  "❤️": "love"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiClickHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "not have this value in database";
    }

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outt</h1>
      <input
        onChange={emojiClickHandler}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />

      <h2> {meaning}</h2>
    </div>
  );
}

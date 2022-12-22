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
const emojis = Object.keys(emojiDictionary);
export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("this emoji out of our database");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>inside outt</h1>
      <input
        value={emoji}
        onChange={changeHandler}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />

      <h2> {meaning}</h2>
      <hr />
      <h2>Emojis We know</h2>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}

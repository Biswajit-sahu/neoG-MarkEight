import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🤔": "Thinking Face",
  "😉": "Winking Face",
  "😍": "Heart Eyes and Smiling Face",
  "🤣": "Rolling on the floor laughing",
  "🤑": "Money Mouth Face",
  "🤫": "Shushing Face",
  " 😛": "Face with Tongue ",
   "😑 ": " Expressionless Face",
   " 😌": " Relieved Face",
   " 😬": " Grimacing Face",
   " 😨": "Fearful Face ",
   " 😈": " Smiling Face with Horns"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this emoji in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ color: "blueviolet" }}>Welcome to Emoji Interpreter!!!</h1>
      <h2>Search any Emoji to know about it</h2>
      <input
        onChange={emojiInputHandler}
        placeholder="Search any emoji here"
      ></input>
      <h3>{meaning}</h3>
      <h2>Emojis we know 👇</h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            id="emojis"
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

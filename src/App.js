import "./styles.css";
import React, { useState } from "react";

var fruits = {
  "🍓": "Strawberry",
  "🍇": "Grapes",
  "🥭": "Mango",
  "🍎": "Apple",
  "🥝": "Kiwi Fruit",
  "🍒": "Cherries",
  "🍍": "Pineapple",
  "🍐": "Pear",
  "🍉": "Watermelon",
  "🍌": "Banana"
};

var fruitsWeKnow = Object.keys(fruits);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputhandler(event) {
    var inputfruit = event.target.value;
    var meaning = fruits[inputfruit];

    if (meaning === undefined) {
      meaning = "Oops!Sorry,I don't know its meaning.";
    }

    setMeaning(meaning);
  }
  function fruitClickHandler(fruit) {
    var meaning = fruits[fruit];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Fruit Emojis</h1>

      <input
        placeholder="Select your Fruit here..."
        onChange={inputhandler}
      ></input>

      <div>
        <h2>The fruit selected by you is :-</h2>

        <h1 style={{ color: "green" }}>{meaning}</h1>

        <h2>Listing out the fruits that I know :-</h2>

        {fruitsWeKnow.map(function (fruit) {
          return (
            <span
              onClick={() => fruitClickHandler(fruit)}
              style={{
                fontSize: "xxx-large",
                backgroundColor: "white",
                padding: "0.5rem 0.6rem",
                cursor: "pointer"
              }}
              key={fruit}
            >
              {fruit}
            </span>
          );
        })}
      </div>
    </div>
  );
}

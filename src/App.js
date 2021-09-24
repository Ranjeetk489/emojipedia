import React, { useState } from "react";
import "./styles.css";

const edict = {
  "😀": "Grinning Face",
  "🤩": "Stary Face",
  "🤪": "Zany Face",
  "🤗": "Hugging Face",
  "🦃": "Thanksgiving",
  "💘": "Valentine’s Day",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "😵‍💫": "Face with Spiral Eyes",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳": "Partying Face",
  "😎": "Smiling Face with Sunglasses",
  "🎖️": "Veterans Day",
  "👰 ": "Wedding",
  "⛄": "Winter",
  "🎿": "Winter Olympics"
};
// var e_list = Object.keys(edict)

// function App() {
//   const [counter, setCounter] = useState(0)
//   const [data, setData] = useState("")
//   function buttonClickHandler(){
//     var newCounter = counter+1;
//     setCounter(newCounter)
//   }
//   function clickHandler(e){
//     var input = e.target.value
//     var meaning = edict[input]
//     if(meaning === undefined){
//       meaning = "Not available in DataBase"
//     }
//     setData(meaning);
//   }
//   // function getBg(index){
//   //   if(index%2 === 0)
//   //   {
//   //     return "White"
//   //   }
//   //   return "grey"
//   // }

const emojis = Object.keys(edict);
export default function App() {
  const [meaning, setMeaning] = useState("Translations Will Be Shown Here");
  const [emoji, setEmoji] = useState("");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in edict) {
      setMeaning(edict[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(edict[inputEmoji]);
  }
  return (
    <div className="App">
      <h1>
        <span id="emoji">Emoji</span>
        <span id="pedia">Pedia📚🔍</span>
      </h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search Your Emoji Here"}
        style={{
          padding: "1rem",
          minWidth: "80%"
        }}
      ></input>
      <h2>{emoji}</h2>
      <h2>{meaning}</h2>
      {emojis.map((emoji) => (
        <span onClick={() => emojiClickHandler(emoji)}>
          <span id="lEmoji">{emoji}</span>
        </span>
      ))}
    </div>
  );
}

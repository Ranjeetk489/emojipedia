import React, { useState } from "react";
import "./styles.css";

const edict = {
  "ð": "Grinning Face",
  "ð¤©": "Stary Face",
  "ð¤ª": "Zany Face",
  "ð¤": "Hugging Face",
  "ð¦": "Thanksgiving",
  "ð": "Valentineâs Day",
  "ð·": "Face with Medical Mask",
  "ð¤": "Face with Thermometer",
  "ð¤": "Face with Head-Bandage",
  "ð¤¢": "Nauseated Face",
  "ð¤®": "Face Vomiting",
  "ð¤§": "Sneezing Face",
  "ð¥µ": "Hot Face",
  "ð¥¶": "Cold Face",
  "ð¥´": "Woozy Face",
  "ðµ": "Dizzy Face",
  "ðµâð«": "Face with Spiral Eyes",
  "ð¤¯": "Exploding Head",
  "ð¤ ": "Cowboy Hat Face",
  "ð¥³": "Partying Face",
  "ð": "Smiling Face with Sunglasses",
  "ðï¸": "Veterans Day",
  "ð° ": "Wedding",
  "â": "Winter",
  "ð¿": "Winter Olympics"
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
      setMeaning("Can't find this emoji in our Databse");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(edict[inputEmoji]);
  }
  return (
    <div className="App">
      <h1>
        <span id="emoji">Emoji</span>
        <span id="pedia">Pediaðð</span>
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

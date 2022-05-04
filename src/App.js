import React, { useState } from "react";
import "./styles.css";
import imageArr from "./imageData";

export default function App() {
  const [bigImage, setBigImage] = useState(imageArr[0].img);
  
  const handleClick = (imgUrl) => {
    setBigImage(imgUrl);
  };
  
  const images = imageArr.map((element, index) => {
    return (
      <img
        className={bigImage === element.img ? "clickedImg" : "thumb"}
        src={element.img}
        alt={element.city}
        onClick={() => handleClick(element.img)}
        key={index}
      />
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        <img id="bigimage" src={bigImage} alt="bigimage" />
      </div>
    </div>
  );
}

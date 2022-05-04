// IMPORT useState
import React, { useState } from "react";
import "./styles.css";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imageArr from "./imageData";

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  const [bigImage, setBigImage] = useState(imageArr[0].img);
  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  const handleClick = (imgUrl) => {
    setBigImage(imgUrl);
  };
  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
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
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        {/* <img src="" id="bigimage" alt='bigImage'/> */}
        <img id="bigimage" src={bigImage} alt="bigimage" />
      </div>
    </div>
  );
}

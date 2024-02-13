import React from "react";
import books from "../components/books.jpg";

function Bkimg() {
  return (
    <div className="image-container">
      <img className="cover-img" src={books} alt="" />
    </div>
  );
}

export default Bkimg;

import React from "react";

function Input(props) {
  return (
    <div className="on-image">
      <span className="book-heading">
        <p
          style={{
            color: "white",
            paddingRight: "10px",
            fontSize: "30px",
            display: "inline",
          }}
        >
          Book
        </p>
      </span>
      <input
        onChange={(e) => props.setBookName(e.target.value)}
        className="search-box"
        type="text"
        placeholder="Search your favourite book..."
        value={props.bookName}
      />
      <button className="search-button" onClick={props.handleClick}>
        Search
      </button>
    </div>
  );
}

export default Input;

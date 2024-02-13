import React from "react";

function Results(props) {
  //     return (
  return (
    <>
      <div className="result-heading">
        <h2>Results</h2>
      </div>
      <div className="books-match">
        {props.bookList.map((book, index) => (
          <div key={index} className="book-card">
            <div>
              <img
                src={
                  book.volumeInfo.imageLinks &&
                  book.volumeInfo.imageLinks.smallThumbnail
                }
                alt=""
              />
            </div>
            <div>{book.volumeInfo.title}</div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Results;

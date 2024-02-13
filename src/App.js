import { useState, useEffect } from "react";
import Bkimg from "./components/Bkimg";
import Input from "./components/Input";
import Results from "./components/Results";
import axios from "axios";

function App() {
  const [bookName, setBookName] = useState("");
  const [bookList, setBookList] = useState([]);

  const client = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
  });

  const getBooks = async () => {
    try {
      const response = await client.get(
        `?q=${bookName}&key=AIzaSyBGNc7k5jfKawfRco0C5Ewi6gApaYnkrh8`
      );
      setBookList(response.data.items);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  function handleClick() {
    getBooks();
    setBookName("");
  }
  return (
    <div className="App">
      <Bkimg />
      <Input
        bookName={bookName}
        handleClick={handleClick}
        setBookName={setBookName}
      />
      <Results bookList={bookList} />
    </div>
  );
}
export default App;

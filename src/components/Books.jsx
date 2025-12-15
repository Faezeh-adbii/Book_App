import { useState } from "react";
import { books } from "../constants/mockData";
import BookCard from "./BookCard";
import SideCard from "./sideCard";
import styles from "./Books.module.css";

function Books() {
  const [Liked, setLiked] = useState([]);
  const handleLikeList = (book, status) => {
    if (status) {
      const NewLikeList = Liked.filter((i) => i.id !== book.id);
      setLiked(NewLikeList);
    } else {
      setLiked((Liked) => [...Liked, book]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {books.map((book) => (
          <BookCard key={book.id} data={book} handleLikeList={handleLikeList} />
        ))}
      </div>
      {!!Liked.length && (
        <div className={styles.favorite}>
          <h4>Favorites</h4>
          {Liked.map((book) => (
            <SideCard key={book.id} data={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;

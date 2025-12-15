import { useState } from "react";
import { books as bookData } from "../constants/mockData";
import BookCard from "./BookCard";
import SideCard from "./sideCard";
import styles from "./Books.module.css";
import SearchBox from "./SearchBox";

function Books() {
  const [Liked, setLiked] = useState([]);
  const [Search , setSearch]= useState([]);
  const [Books , setBooks]=useState(bookData);
  const handleLikeList = (book, status) => {
    if (status) {
      const NewLikeList = Liked.filter((i) => i.id !== book.id);
      setLiked(NewLikeList);
    } else {
      setLiked((Liked) => [...Liked, book]);
    }
  };

  const searchHandler=()=>{
    if(Search){
      const NewBooks=bookData.filter((book)=>book.title.toLowerCase().includes(Search) );
      setBooks(NewBooks);
    }else{
      setBooks(bookData);
    }
  };

  return (
    <>
    <SearchBox Search={Search} setSearch={setSearch} searchHandler={searchHandler} />

    <div className={styles.container}>
      <div className={styles.cards}>
        {Books.map((book) => (
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
    </>
  );
}

export default Books;

import { useState } from "react";

import { books } from "../constants/mockData";
import BookCard from "./BookCard";

function Books() {
  const [Liked, setLiked] = useState([]);
  const handleLikeList = (book, status) => {
    if(status){
      const NewLikeList = Liked.filter((i)=>i.id !== book.id);
      setLiked(NewLikeList);
    }else{
      setLiked((Liked) => [...Liked , book]);
    }
  };

  return (
    <div>
      <div>
        {books.map((book) => (
          <BookCard key={book.id} data={book} handleLikeList={handleLikeList} />
        ))}
      </div>
      {!!Liked.length && <div>ww</div>  }
    </div>
  );
}

export default Books;

import { AiOutlineSearch } from "react-icons/ai";
import styles from "./Search.module.css"
function SearchBox({ Search, setSearch , searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search tiltle"
        value={Search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={searchHandler}>
        <AiOutlineSearch />
      </button>
    </div>
  );
}

export default SearchBox;

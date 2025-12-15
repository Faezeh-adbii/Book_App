import { AiOutlineSearch } from "react-icons/ai";
function SearchBox({ Search, setSearch , searchHandler }) {
  return (
    <div>
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

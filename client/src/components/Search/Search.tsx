import "./Search.css";
import { useSearch } from "../../contexts/SearchContexts";

const placeHoder = "Que voulez-vous écouter ?";

function Search() {
  const { setSearchTerm } = useSearch();
  return (
    <input
      className="header-input"
      type="text"
      placeholder={placeHoder}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default Search;

import "./Search.css";

const placeHoder = "Que voulez-vous écouter ?";

interface SearchProps {
  onSearchChange: (value: string) => void;
}

function Search({ onSearchChange }: SearchProps) {
  return (
    <input
      className="header-input"
      type="text"
      placeholder={placeHoder}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default Search;

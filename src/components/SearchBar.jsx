import React from "react";
import Search from "@material-ui/icons/Search"
import "./SearchBar.scss"
export default function SearchBar(props) {
  // const [search, setSearch] = useState("");

  return (
    <div className={"background"}>
    <div className={"search-bar"}>
      <input
      className={"input"}
      value={props.search}
      placeholder={"SEARCH"}
      onChange={(event) => props.searchState(event.target.value)}
      />
      <button search className={"button"} onClick={props.onClick}><Search/></button>
    </div>
    </div>
  );
};
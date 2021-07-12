import React from "react";
import Search from "@material-ui/icons/Search"
import "./SearchBar.scss"
import { TextField } from "@material-ui/core";
export default function SearchBar(props) {


  return (
    <div className={"background"}>
    <div className={"search-bar"}>
      <TextField
      className={"input"}
      value={props.search}
      label={"SEARCH"}
      onChange={(event) => props.searchState(event.target.value)}
      size={'small'}
      />
      <button search className={"button"} onClick={props.onClick}><Search/></button>
    </div>
    </div>
  );
};
import React from "react";
import Search from "@material-ui/icons/Search"
import "./SearchBar.scss"
import { TextField } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
export default function SearchBar(props) {


  return (
    <div className={"background"}>
    <div className={"search-bar"}>
      <TextField
      className={"input"}
      value={props.search}
      label={"SEARCH"}
      onChange={(event) => props.searchState(event.target.value)}
      // variant={'outlined'}
      size={'small'}
      color={'green'}
      />
      <button search className={"button"} onClick={props.onClick}><Search/></button>
    </div>
    </div>
  );
};
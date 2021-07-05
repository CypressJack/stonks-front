import React from "react";
import ArticleList from "./ArticleList"
import SearchBar from "../SearchBar";

// Import global styling overrides aka our theme
import "../../globalStyleOverride.scss";

export default function News(props) {
  return (
    <section>
      <SearchBar/>
      <ArticleList news={props.news}/>
    </section>
  );
};
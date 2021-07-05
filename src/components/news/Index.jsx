import React from "react";
import ArticleList from "./ArticleList";
import SearchBar from "../SearchBar";
import Filters from "../Filters";
// Import global styling overrides aka our theme
import "../../globalStyleOverride.scss";

export default function News(props) {
  return (
    <section>
      <SearchBar/>
      <Filters onNewsClick={"Balls"}/>
      <ArticleList news={props.news}/>
    </section>
  );
};
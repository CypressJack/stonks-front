import React from "react";
import ArticleList from "./ArticleList"

// Import global styling overrides aka our theme
import "../../globalStyleOverride.scss";

export default function News(props) {
  return (
    <ArticleList news={props.news}/>
  );
};
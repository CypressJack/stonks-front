import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StylesProvider } from "@material-ui/core/styles";


import ArticleList from "../src/components/news/ArticleList";
import ListItem from "../src/components/news/ListItem";


const article = {
"category": "business",
"datetime": 1596588232,
"headline": "B&G Foods CEO expects pantry demand to hold up post-pandemic",
"id": 5085113,
"image": "https://image.cnbcfm.com/api/v1/image/106629991-1595532157669-gettyimages-1221952946-362857076_1-5.jpeg?v=1595532242",
"related": "",
"source": "CNBC",
"summary": "\"I think post-Covid, people will be working more at home, which means people will be eating more breakfast\" and other meals at home, B&G CEO Ken Romanzi said.",
"url": "https://www.cnbc.com/2020/08/04/bg-foods-ceo-expects-pantry-demand-to-hold-up-post-pandemic.html"
}

storiesOf("News", module)
  .add("ArticleList", () => <StylesProvider injectFirst><ArticleList></ArticleList></StylesProvider>)
  .add("ListItem", () => <StylesProvider injectFirst><ListItem img={article.image} headline={article.headline} dateTime={article.datetime}></ListItem></StylesProvider>)


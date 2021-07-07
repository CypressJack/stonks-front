import React, {useState} from "react";

// Import global styling overrides aka our theme
import "../../globalStyleOverride.scss";
import ListItem from "./ListItem";
import Slide from '@material-ui/core/Slide';
import Filters from "../Filters";
  // props
  // img
  // headline
  // summary


  export default function ArticleList(props) {
    const [filter, setFilter] = useState("All");
    let articles;

    if (props.news && filter === "All"){
      articles = props.news.map((article) => {
        return (
          <div className='list-item-container' key={article.id}>
          <ListItem
          img={article.image}
          headline={article.headline}
          summary={article.summary}
          dateTime={article.datetime}
          url={article.url}
          />
          <div className='article-divider'/>
          </div>
        )
      });
    }

    if(filter === "Your News") {
      props.yourNews.map((article) => {
        articles = article.map((individualArticle => {
          return (
            <div className='list-item-container' key={individualArticle.id}>
            <ListItem
            img={individualArticle.image_url}
            headline={individualArticle.title}
            summary={individualArticle.description}
            dateTime={Date.parse(individualArticle.published_utc)}
            url={individualArticle.article_url}
            />
            <div className='article-divider'/>
            </div>
          )
        }))
      });
    }

    return (
    <div>
      <Filters onNewsClick={setFilter}/>
      <Slide direction="up" in={true}mountOnEnter unmountOnExit>
      <ul className='article-list'>
        { articles }
      </ul>
      </Slide>
    </div>
    )
  }
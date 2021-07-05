import React from "react";
import "./App.scss";
import useApiData from "./hooks/useApiData";
import News from "./components/news/Index"
import TickerList from "./components/TickerList";
import Nav from "./components/Nav";

// import Button from "@material-ui/core/Button";

// Override styling on any material component in this file
import "./globalStyleOverride.scss";
import { StylesProvider } from "@material-ui/core/styles";

export default function App() {
  const { state } = useApiData();

  // console.log("users", state.users.users)
  // console.log("stocks", state.stocks.stocks)
  // console.log("transacts", state.transactions.transactions)
  // console.log("tutorials", state.tutorials.tutorials)
  console.log("news", state.news.allnews)

  return (
    <StylesProvider injectFirst>
      <div className="App">
        <div className="app-top-half">
          {/* <TickerList stocks={state.stocks} onClick={console.log("")} /> */}
          <News news={state.news.allnews}/>
        </div>
        <Nav />
      </div>
    </StylesProvider>
  );
}

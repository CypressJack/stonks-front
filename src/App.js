import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from "react";
import "./App.scss";
import useApiData from "./hooks/useApiData";
import useVisualMode from "./hooks/useVisualMode";

import News from "./components/news/Index"
import TickerList from "./components/TickerList";
import Nav from "./components/Nav";

// import Button from "@material-ui/core/Button";

// Override styling on any material component in this file
import "./globalStyleOverride.scss";
import { StylesProvider } from "@material-ui/core/styles";

export default function App() {
  const { state } = useApiData();
  const { mode, transition, back } = useVisualMode('showstocks')

  console.log(mode)

  // console.log("users", state.users.users)
  // console.log("stocks", state.stocks.stocks)
  // console.log("transacts", state.transactions.transactions)
  // console.log("tutorials", state.tutorials.tutorials)
  // console.log("news", state.news.allnews)

  return (
    <StylesProvider injectFirst>
      <div className="App">
        <div className="app-top-half">
          {mode === 'showstocks' && (<TickerList stocks={state.stocks} onClick={console.log("")}/>)}
          {mode === 'shownews' && (<News news={state.news.allnews}/>)}
        </div>
        <Nav newsClick={() => transition('shownews')} searchClick={()=> transition('showstocks')}/>
      </div>
    </StylesProvider>
  );
}

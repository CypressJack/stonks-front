import React from "react";
import "./Filters.scss";
export default function Filters(props) {



  return (
    <div className={"filter-list"}>
      <button>Popular</button>
      <button>Commodities</button>
      <button>Stocks</button>
      <button>Crypto</button>
      <button>Least Volatile</button>
      <button>Most Volatile</button>
    </div>
  );
};
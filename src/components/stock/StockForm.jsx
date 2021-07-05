import React, {useState} from "react";
import Button from "../Button";
import "./StockForm.scss";

export default function StockForm(props) {
  const [amount, setAmount] = useState("");

  return (
    <form className={"stock-form"}>
      <input
      className={"amount-input"}
      placeholder={"Enter amount to buy or sell."}
      value={amount}
      onChange={event => setAmount(event.target.value)}
      />
      <div className={"button-container"}>
        <span className={"button"} onClick={props.onClick}><Button>Buy</Button></span>
        <span className={"button"} onClick={props.onClick}><Button sell>Sell</Button></span>
      </div>
    </form>
  );
};
import React, {useState} from "react";
import Button from "../Button";
import "./StockForm.scss";
import TextField from "@material-ui/core/TextField";

export default function StockForm(props) {
  const [amount, setAmount] = useState("");

  return (
    <form className={"stock-form"}>
      <TextField
      className={"amount-input"}
      label={"Enter amount to buy or sell."}
      value={amount}
      onChange={event => setAmount(event.target.value)}
      variant={'outlined'}
      />
      <div className={"button-container"}>
        <span className={"button"} onClick={props.onClick}><Button>Buy</Button></span>
        <span className={"button"} onClick={props.onClick}><Button sell>Sell</Button></span>
      </div>
    </form>
  );
};
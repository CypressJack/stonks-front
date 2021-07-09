import React, {useState} from "react";
import Button from "../Button";
import "./StockForm.scss";
import TextField from "@material-ui/core/TextField";

export default function StockForm(props) {
  const [amount, setAmount] = useState("");
  
  const formattedMoney = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount * props.currentPrice) 


  return (
    <form className={"stock-form"}>
      <div className={"input-container"}>
      <TextField
      className={"amount-input"}
      label={"Enter amount"}
      value={amount}
      onChange={event => setAmount(event.target.value)}
      variant={'outlined'}
      type='number'
      />
      <TextField
      className={"amount-input-money"}
      label={"Cost in dollars."}
      value={`${formattedMoney}`}
      onChange={event => setAmount(event.target.value)}
      variant={'outlined'}
      disabled
      />
      </div>
      <div className={"button-container"}>
        <span className={"button"} onClick={()=>{props.buy(amount,props.currentPrice)}}><Button>Buy</Button></span>
        <span className={"button"} onClick={()=>{props.sell(amount, props.currentPrice)}}><Button sell>Sell</Button></span>
      </div>
    </form>
  );
};
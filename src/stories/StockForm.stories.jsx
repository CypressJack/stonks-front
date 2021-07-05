import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import StockForm from "../components/stock/StockForm";
import {StylesProvider} from "@material-ui/core/styles";
storiesOf("StockForm", module)
  .add("Full form", () => (
    <StylesProvider injectFirst><StockForm
    onClick={action("Button Clicked!")}
    /></StylesProvider>
  ));
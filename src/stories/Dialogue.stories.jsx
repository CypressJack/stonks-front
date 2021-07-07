import React from "react";
import { storiesOf } from "@storybook/react";
import Dialogue from "../components/stock/Dialogue";

storiesOf("Dialogue box", module)
  .add("dialogue", () => (
    <Dialogue
    message={"Bought!"}
    />
  ));
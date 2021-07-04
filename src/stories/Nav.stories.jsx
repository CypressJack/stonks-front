import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Nav from "../components/Nav";


storiesOf("Nav", module)
  .add("Base", () => (
    <Nav
    onClick={action("Button Clicked!")}
    />
  ))
  .add("Pre-selected", () => (
    <Nav
    selected = {true}
    onClick={action("Button Clicked!")}
    />
  ))
  .add("Nav-Button", () => (
    <Nav
    onClick={action("Button Clicked!")}
    />
  ));
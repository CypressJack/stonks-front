import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StylesProvider } from "@material-ui/core/styles";

// import Button from "@material-ui/core/Button";
import Button from "components/Button";

storiesOf("Button", module)
  .add("Base", () => <StylesProvider injectFirst><Button onClick={action("Button Clicked!")}>Base</Button></StylesProvider>)
  .add("Sell", () => <StylesProvider injectFirst><Button className="red-button" onClick={action("Button Clicked!")}>Sell</Button></StylesProvider> )
  .add("Tutorial", () => <StylesProvider injectFirst><Button className="MuiButton-tutorial" onClick={action("Button Clicked!")} completed={false}>Tutorial 1.</Button></StylesProvider>)
  .add("Completed tutorial", () => <StylesProvider injectFirst><Button className="MuiButton-tutorial" onClick={action("Button Clicked!")} completed={true} >Tutorial 1.</Button></StylesProvider>);
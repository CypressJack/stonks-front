import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {StylesProvider} from "@material-ui/core/styles"
import TutorialsList from "../components/tutorials"

storiesOf("Tutorials List", module)
  .add("Tutorials page", () => (
    <StylesProvider injectFirst><TutorialsList
    onClick={action("Button Clicked!")}
    /></StylesProvider>
  ));
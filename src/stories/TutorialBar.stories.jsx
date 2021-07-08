import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StylesProvider } from "@material-ui/core/styles";

import TutorialBar from "../components/TutorialBar";

storiesOf("Tutorial Indicator", module)
.add("Entering Tut PopUp", () => (
  <StylesProvider injectFirst>
    <TutorialBar
    />
  </StylesProvider>
))
  .add("Exiting Tut PopUp", () => (
    <StylesProvider injectFirst>
      <TutorialBar
        tutorial
      />
    </StylesProvider>
  ))

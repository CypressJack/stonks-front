import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Profile from "../components/graph/Graph";

storiesOf("Profile", module)
  .add("Base", () => (
    <Profile
    />
  ));
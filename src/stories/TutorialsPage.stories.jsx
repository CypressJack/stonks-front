import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TutorialPage from "../components/tutorials/TutorialPage";
import {StylesProvider} from '@material-ui/core/styles';

storiesOf("Tuts page", module)
  .add("First Tutorial", () => (
    <StylesProvider injectFirst><TutorialPage
    title={"Lesson 1: Common Terms"}
    paragraph1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non diam a magna posuere faucibus eu a ipsum. Donec eget arcu leo. Cras vitae efficitur nibh. Duis ultrices, dolor vitae euismod laoreet, elit ipsum malesuada est, non vestibulum augue odio et ante. Pellentesque in efficitur tellus. Sed massa est, posuere sed ante vitae, imperdiet egestas nunc. Nunc sem orci, lobortis quis sapien vitae, rutrum commodo tortor. Aliquam porttitor lacinia turpis, sed fringilla quam sagittis ac. Fusce sollicitudin lacinia urna, et bibendum sapien tincidunt eget. Vestibulum et varius eros."}
    subtitle1={"Stonks and Stuff"}
    paragraph2={"Sed rhoncus posuere lobortis. Ut dictum ornare quam, in elementum ex faucibus vel. Fusce leo dolor, porttitor quis porta at, fringilla sit amet leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam eget lacus et erat convallis vehicula id non arcu. Quisque sed viverra leo, eu tincidunt justo. Aliquam erat volutpat. Maecenas sed metus mauris. Sed in neque id quam ornare vehicula. Duis dignissim fermentum felis non porta. Maecenas at lectus orci. Suspendisse a tempus lacus. Quisque euismod varius lobortis. Fusce id varius quam, et porttitor ante. Sed vitae tincidunt lorem, id molestie turpis. Integer vehicula sem in placerat laoreet."}
    subtitle2={"More Stuff"}
    back={true}
    onClick={action("Button clicked!")}
    paragraph3={"Cras sed egestas dui. Donec hendrerit elit sed nisl suscipit facilisis. Donec eu risus nec lorem ultricies vehicula. Nullam sollicitudin eget metus a congue. Ut eleifend eros nec felis lacinia, in pellentesque tellus tempor. Proin eu odio et ante faucibus laoreet. Pellentesque id risus eu ligula posuere posuere nec sit amet risus. Proin at elit id turpis tincidunt pretium. Nulla finibus orci neque, quis sollicitudin felis posuere sit amet. Integer rutrum pulvinar ullamcorper. Nunc eget sapien nunc. Donec eget elit mollis, mollis magna a, egestas orci. Nam iaculis ante in mi pharetra aliquam."}
    /></StylesProvider>
  ))
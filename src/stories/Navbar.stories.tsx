import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Navbar } from "../components";

export default {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar />;

export const NavbarDefault = Template.bind({});

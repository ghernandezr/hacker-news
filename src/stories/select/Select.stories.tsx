import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { Container, Select } from "../../components";
import { items } from "../../data";

export default {
  title: "Components/Select",
  component: Select,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Select>;

export const DefaultSelect = () => (
  <Container style={{ margin: 40 }}>
    <Select />
  </Container>
);

export const SelectWithItems = () => (
  <Container style={{ margin: 40 }}>
    <Select items={items} />
  </Container>
);

export const ControlledSelect = () => {
  const [item, setItem] = useState(items[0]);

  const handleSelectionChange = (item: any) => {
    setItem(item);
  };
  return (
    <Container style={{ margin: 40 }}>
      <Select
        items={items}
        value={item}
        onSelectionChange={handleSelectionChange}
      />
    </Container>
  );
};

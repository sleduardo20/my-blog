import { Meta, Story } from "@storybook/react";

import { CardPost, CardPostProps } from ".";

import mockCard from "./mock";

export default {
  title: "components/CardPost",
  component: CardPost,
  args: mockCard,
} as Meta;

export const Basic: Story<CardPostProps> = (args) => (
  <div style={{ maxWidth: "120rem", margin: "48px auto", padding: "4px" }}>
    <CardPost {...args} />
  </div>
);

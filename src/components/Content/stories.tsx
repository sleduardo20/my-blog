import { Meta, Story } from "@storybook/react";

import { Content, ContentProps } from ".";

import { mockcontent } from "./mock";

export default {
  title: "components/Content",
  component: Content,
  args: mockcontent,
} as Meta;

export const Basic: Story<ContentProps> = (args) => (
  <div style={{ maxWidth: "70rem", margin: "48px auto", padding: "4px" }}>
    <Content {...args} />
  </div>
);

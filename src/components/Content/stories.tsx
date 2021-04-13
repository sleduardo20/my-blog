import { Meta, Story } from "@storybook/react";

import { Content, ContentProps } from ".";

import mockContent from "./mock";

export default {
  title: "components/Content",
  component: Content,
  args: mockContent,
} as Meta;

export const Basic: Story<ContentProps> = (args) => (
  <div style={{ maxWidth: "120rem", margin: "48px auto", padding: "4px" }}>
    <Content {...args} />
  </div>
);

import { Meta, Story } from "@storybook/react";

import { Banner, BannerProps } from ".";

export default {
  title: "components/Banner",
  component: Banner,
  args: {
    src:
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80",
  },
} as Meta;

export const Basic: Story<BannerProps> = (args) => <Banner {...args} />;

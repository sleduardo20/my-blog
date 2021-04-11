import { Meta, Story } from '@storybook/react';

import { Banner } from '.';

export default {
  title: 'components/Banner',
  component: Banner,
} as Meta;

export const Basic: Story = args => <Banner {...args} />;

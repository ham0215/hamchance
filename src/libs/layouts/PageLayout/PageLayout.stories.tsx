import { StoryObj, Meta } from '@storybook/react';

import { PageLayout } from './PageLayout.layout';

type Component = typeof PageLayout;
type Story = StoryObj<Component>;

const args = {
  children: 'Contents',
};

const meta: Meta<Component> = {
  title: 'layouts/Contents',
  component: PageLayout,
  args,
};

export default meta;
export const Default: Story = {};

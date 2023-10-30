import { StoryObj, Meta } from '@storybook/react';

import { Home } from './Home.component';

type Component = typeof Home;
type Story = StoryObj<Component>;

const args = {};

const meta: Meta<Component> = {
  title: 'Home',
  component: Home,
  args,
};

export default meta;
export const Default: Story = {};

import { Meta, StoryObj } from '@storybook/nextjs';

import { Home } from './Home';

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

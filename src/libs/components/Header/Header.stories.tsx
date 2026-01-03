import { Meta, StoryObj } from '@storybook/nextjs';

import { Header } from './Header';

type Component = typeof Header;
type Story = StoryObj<Component>;

const args = {};

const meta: Meta<Component> = {
  title: 'layouts/Header',
  component: Header,
  args,
};

export default meta;
export const Default: Story = {};

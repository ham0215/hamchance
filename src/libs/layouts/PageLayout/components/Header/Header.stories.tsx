import { Meta,StoryObj } from '@storybook/react';

import { Header } from './Header.component';

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

import { Meta, StoryObj } from '@storybook/nextjs';

import { XProductLink } from './XProductLink';

type Component = typeof XProductLink;
type Story = StoryObj<Component>;

const args = {};

const meta: Meta<Component> = {
  title: 'features/Home/XProductLink',
  component: XProductLink,
  args,
};

export default meta;
export const Default: Story = {};

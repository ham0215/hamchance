import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Footer } from './Footer';

type Component = typeof Footer;
type Story = StoryObj<Component>;

const args = {};

const meta: Meta<Component> = {
  title: 'layouts/Footer',
  component: Footer,
  args,
};

export default meta;
export const Default: Story = {};

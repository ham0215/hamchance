import { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer.component';

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

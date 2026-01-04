import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Link } from './Link';

type Component = typeof Link;
type Story = StoryObj<Component>;

const args = {
  href: 'http://localhost:3000',
  prefetch: false,
  children: 'Link',
};

const meta: Meta<Component> = {
  title: 'ui/Link',
  component: Link,
  args,
};

export default meta;
export const Default: Story = {};

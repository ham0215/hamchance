import { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link.component';

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

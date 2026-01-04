import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ExternalLink } from './ExternalLink';

type Component = typeof ExternalLink;
type Story = StoryObj<Component>;

const args = {
  href: 'https://storybook.js.org/',
  prefetch: false,
  children: 'Storybook',
};

const meta: Meta<Component> = {
  title: 'ui/ExternalLink',
  component: ExternalLink,
  args,
};

export default meta;
export const Default: Story = {};

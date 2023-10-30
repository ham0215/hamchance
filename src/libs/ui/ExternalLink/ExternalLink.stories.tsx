import { Meta, StoryObj } from '@storybook/react';

import { ExternalLink } from './ExternalLink.component';

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

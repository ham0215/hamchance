import { Meta, StoryObj } from '@storybook/nextjs';

import { QrButton } from './QrButton';

type Component = typeof QrButton;
type Story = StoryObj<Component>;

const meta: Meta<Component> = {
  title: 'features/Home/QrButton',
  component: QrButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
export const Default: Story = {};

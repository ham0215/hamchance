import { Meta, StoryObj } from '@storybook/nextjs';

import { QrButton } from './QrButton';

type Component = typeof QrButton;
type Story = StoryObj<Component>;

const args = {
  onClick: () => console.log('QR button clicked'),
};

const meta: Meta<Component> = {
  title: 'features/Home/QrButton',
  component: QrButton,
  args,
};

export default meta;
export const Default: Story = {};

import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { QrModalButton } from './QrModalButton';

type Component = typeof QrModalButton;
type Story = StoryObj<Component>;

const args = {
  src: '/static/images/x-qr.png',
  alt: 'QR Code',
};

const meta: Meta<Component> = {
  title: 'ui/QrModalButton',
  component: QrModalButton,
  args,
};

export default meta;
export const Default: Story = {};

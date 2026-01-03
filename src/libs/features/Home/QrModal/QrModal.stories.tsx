import { Meta, StoryObj } from '@storybook/nextjs';

import { QrModal } from './QrModal';

type Component = typeof QrModal;
type Story = StoryObj<Component>;

const args = {
  open: true,
  onClose: () => console.log('Modal closed'),
};

const meta: Meta<Component> = {
  title: 'features/Home/QrModal',
  component: QrModal,
  args,
};

export default meta;
export const Open: Story = {};
export const Closed: Story = {
  args: {
    open: false,
  },
};

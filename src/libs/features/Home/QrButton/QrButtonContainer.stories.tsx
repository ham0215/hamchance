import { Meta, StoryObj } from '@storybook/nextjs';

import { QrButtonContainer } from './QrButtonContainer';

type Component = typeof QrButtonContainer;
type Story = StoryObj<Component>;

const args = {};

const meta: Meta<Component> = {
  title: 'features/Home/QrButtonContainer',
  component: QrButtonContainer,
  args,
};

export default meta;
export const Default: Story = {};

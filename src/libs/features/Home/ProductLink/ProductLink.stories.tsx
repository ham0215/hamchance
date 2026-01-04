import { SiGithub } from '@icons-pack/react-simple-icons';
import { Meta, StoryObj } from '@storybook/react';

import { ProductLink } from './ProductLink';

type Component = typeof ProductLink;
type Story = StoryObj<Component>;

const args = {
  href: 'https://github.com/example',
  productName: 'GitHub',
  name: '@example',
  children: <SiGithub color="black" size={46} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
};

const meta: Meta<Component> = {
  title: 'features/Home/ProductLink',
  component: ProductLink,
  args,
};

export default meta;
export const Default: Story = {};
export const WithLongName: Story = {
  args: {
    name: '@verylongusernamethatmightoverflow',
  },
};

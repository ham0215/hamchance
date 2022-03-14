import { ComponentStory, ComponentMeta } from '@storybook/react';

import Link from '.';

export default {
  title: 'atoms/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args}>Link</Link>;

export const Default = Template.bind({});

Default.args = {
  href: 'http://localhost:3000',
  prefetch: false,
};

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ExternalLink from '.';

export default {
  title: 'ExternalLink',
  component: ExternalLink,
} as ComponentMeta<typeof ExternalLink>;

const Template: ComponentStory<typeof ExternalLink> = (args) => <ExternalLink {...args}>Strorybook</ExternalLink>;

export const Default = Template.bind({});

Default.args = {
  href: 'https://storybook.js.org/',
};

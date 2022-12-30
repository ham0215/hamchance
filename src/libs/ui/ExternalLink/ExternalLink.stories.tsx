import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ExternalLink } from './ExternalLink.component';

export default {
  title: 'atoms/ExternalLink',
  component: ExternalLink,
} as ComponentMeta<typeof ExternalLink>;

const Template: ComponentStory<typeof ExternalLink> = (args) => <ExternalLink {...args}>Storybook</ExternalLink>;

export const Default = Template.bind({});

Default.args = {
  href: 'https://storybook.js.org/',
};

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header.component';

export default {
  title: 'templates/PageLayout/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});

Default.args = {};
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageLayout from '.';

export default {
  title: 'templates/PageLayout',
  component: PageLayout,
} as ComponentMeta<typeof PageLayout>;

const Template: ComponentStory<typeof PageLayout> = () => <PageLayout>Contents</PageLayout>;

export const Default = Template.bind({});

Default.args = {};

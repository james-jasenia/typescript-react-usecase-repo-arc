import type { Meta, StoryObj } from '@storybook/react';

import ReminderCard from './ReminderCard';

const meta = {
  component: ReminderCard,
} satisfies Meta<typeof ReminderCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "title"
  }
};
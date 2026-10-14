import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: { label: 'Email', placeholder: 'you@example.com' },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const WithHint: Story = { args: { hint: 'We only use this to send receipts.' } };
export const WithError: Story = { args: { error: 'Enter a valid email address.', defaultValue: 'asha@' } };
export const Required: Story = { args: { required: true } };
export const Disabled: Story = { args: { disabled: true } };

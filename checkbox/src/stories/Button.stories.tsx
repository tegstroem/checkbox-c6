import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryDefault: Story = {
  args: {
    "label": "Continue",
    primary: true,
    backgroundColor: "#0F172A",
    size: "medium"
  }
}
export const PrimaryHover: Story = {
  args: {
    "label": "Continue",
    primary: true,
    size: "medium",
    backgroundColor: "#334155"
  }
}

export const DestructiveDefault: Story = {
  args: {
    "label": "Destructive",
    primary: true,
    backgroundColor: "#EF4444",
    size: "large"
  }
}

export const DestructiveHover: Story = {
  args: {
    "label": "Destructive",
    backgroundColor: "#DC2626",
    primary: true,
    size: "large"
  }
}

export const OutlineDefault: Story = {
  args: {
    "label": "Cancel",
    primary: true,
    backgroundColor: "#FFFFFF"
  }
}

export const OutlineHover: Story = {
  args: {
    "label": "Cancel",
    backgroundColor: "#F1F5F9",
    primary: true
  }

}
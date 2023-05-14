import { Category } from "@entities/Categories"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Category> = {
  title: "Category",
  component: Category,
}

type Story = StoryObj<typeof Category>

export const Default: Story = {
  args: {
    name: "Category category",
  },
}

export default meta

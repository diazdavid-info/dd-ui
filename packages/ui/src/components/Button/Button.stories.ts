import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outline'] },
    color: { control: 'select', options: ['primary', 'secondary'] },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export const Solid: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    color: 'primary',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Renders the button on screen', async () => {
      await expect(
        canvas.getByRole('button', { name: 'Button' }),
      ).toBeInTheDocument()
    })

    await step('Fires the event when clicked', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Button' }))

      await expect(args.onClick).toHaveBeenCalled()
    })
  },
}

export const Outline: Story = {
  args: { children: 'Button', variant: 'outline', color: 'primary' },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Renders the button on screen', async () => {
      await expect(
        canvas.getByRole('button', { name: 'Button' }),
      ).toBeInTheDocument()
    })

    await step('Fires the event when clicked', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Button' }))

      await expect(args.onClick).toHaveBeenCalled()
    })
  },
}

export default meta

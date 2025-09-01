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
    radius: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'full'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export const Solid: Story = {
  args: {
    children: 'BUTTON',
    variant: 'solid',
    color: 'primary',
    radius: 'sm',
    size: 'sm',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Renders the button on screen', async () => {
      await expect(
        canvas.getByRole('button', { name: 'BUTTON' }),
      ).toBeInTheDocument()
    })

    await step('Fires the event when clicked', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'BUTTON' }))

      await expect(args.onClick).toHaveBeenCalled()
    })
  },
}

export const Outline: Story = {
  args: { children: 'BUTTON', variant: 'outline', color: 'primary' },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Renders the button on screen', async () => {
      await expect(
        canvas.getByRole('button', { name: 'BUTTON' }),
      ).toBeInTheDocument()
    })

    await step('Fires the event when clicked', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'BUTTON' }))

      await expect(args.onClick).toHaveBeenCalled()
    })
  },
}

export const Pill: Story = {
  args: {
    children: 'BUTTON',
    variant: 'solid',
    color: 'primary',
    radius: 'full',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Renders the button on screen', async () => {
      await expect(
        canvas.getByRole('button', { name: 'BUTTON' }),
      ).toBeInTheDocument()
    })

    await step('Fires the event when clicked', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'BUTTON' }))

      await expect(args.onClick).toHaveBeenCalled()
    })
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
          <path d="M7 9l5 -5l5 5" />
          <path d="M12 4l0 12" />
        </svg>
        UPLOAD FILE
      </>
    ),
    variant: 'outline',
    color: 'primary',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Renders the button on screen', async () => {
      await expect(
        canvas.getByRole('button', { name: 'BUTTON' }),
      ).toBeInTheDocument()
    })

    await step('Fires the event when clicked', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'BUTTON' }))

      await expect(args.onClick).toHaveBeenCalled()
    })
  },
}

export const Icon: Story = {
  args: {
    children: (
      <>
        <svg
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </>
    ),
    variant: 'solid',
    color: 'primary',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Renders the button on screen', async () => {
      await expect(
        canvas.getByRole('button', { name: 'BUTTON' }),
      ).toBeInTheDocument()
    })

    await step('Fires the event when clicked', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'BUTTON' }))

      await expect(args.onClick).toHaveBeenCalled()
    })
  },
}

export default meta

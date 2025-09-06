import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../libs/utils.ts'
import { cva, type VariantProps } from 'class-variance-authority'

const button = cva(
  'flex items-center justify-center gap-2 border focus-visible:outline-none',
  {
    variants: {
      variant: {
        solid: 'border-transparent',
        outline: '',
      },
      color: {
        primary: '',
        secondary: '',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      size: {
        sm: 'px-3 py-1',
        md: 'px-4 py-2',
        lg: 'px-5 py-3',
      },
      disabled: {
        true: 'opacity-30',
        false: 'hover:brightness-80 cursor-pointer',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        color: 'primary',
        class: 'bg-ui-primary text-dark',
      },
      {
        variant: 'solid',
        color: 'secondary',
        class: 'bg-ui-secondary text-light',
      },
      {
        variant: 'outline',
        color: 'primary',
        class: 'border-ui-primary text-ui-primary',
      },
      {
        variant: 'outline',
        color: 'secondary',
        class: 'border-ui-secondary text-ui-secondary',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      radius: 'sm',
      size: 'sm',
      disabled: false,
    },
  },
)

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'disabled'>,
    VariantProps<typeof button> {}

export const Button = ({
  children,
  className,
  variant,
  color,
  radius,
  size,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        '',
        button({ variant, color, radius, size, disabled }),
        className,
      )}
      disabled={disabled ?? undefined}
      {...props}
    >
      {children}
    </button>
  )
}

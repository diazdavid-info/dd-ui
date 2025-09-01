import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../libs/utils.ts'
import { cva, type VariantProps } from 'class-variance-authority'

const button = cva(
  'flex items-center justify-center gap-2 cursor-pointer disabled:bg-ui-primary/10 disabled:cursor-not-allowed border',
  {
    variants: {
      variant: {
        solid: 'active:bg-ui-primary hover:brightness-80',
        outline: 'active:bg-ui-primary hover:brightness-80',
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
    },
    compoundVariants: [
      {
        variant: 'solid',
        color: 'primary',
        class: 'bg-ui-primary text-light border-transparent',
      },
      {
        variant: 'solid',
        color: 'secondary',
        class: 'bg-ui-secondary text-light border-transparent',
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
    },
  },
)

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof button> {}

export const Button = ({
  children,
  className,
  variant,
  color,
  radius,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn('', button({ variant, color, radius, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
}

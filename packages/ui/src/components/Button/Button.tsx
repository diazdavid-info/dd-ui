import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../libs/utils.ts'
import { cva, type VariantProps } from 'class-variance-authority'

const button = cva(
  'flex items-center justify-center px-2 py-1 cursor-pointer disabled:bg-ui-primary/10 disabled:cursor-not-allowed border',
  {
    variants: {
      variant: {
        solid: 'active:bg-ui-primary hover:bg-ui-primary/50',
        outline: 'active:bg-ui-primary hover:bg-ui-primary/50',
      },
      color: {
        primary: '',
        secondary: '',
      },
      radius: {
        none: '',
        sm: '',
        lg: '',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        color: 'primary',
        class: 'bg-ui-primary text-dark border-transparent',
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
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn('', button({ variant, color }), className)}
      {...props}
    >
      {children}
    </button>
  )
}

import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const titleVariants = cva('text-card-foreground flex flex-col rounded-xl', {
  variants: {
    size: {
      xs: 'text-title-xs',
      sm: 'text-title-sm',
      md: 'text-title-md',
      lg: 'text-title-lg',
      xl: 'text-title-xl',
    },
    level: {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
    },
  },
  defaultVariants: {
    size: 'md',
    level: 'h1',
  },
})

export function Heading({
  className,
  children,
  size,
  level = 'h1',
  ...props
}: React.ComponentProps<'h1'> & VariantProps<typeof titleVariants>) {
  const Component = level || 'h1'

  return (
    <Component className={cn(titleVariants({ size }), className)} {...props}>
      {children}
    </Component>
  )
}

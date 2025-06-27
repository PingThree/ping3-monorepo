import { cva, VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '../../utils/cn'

const cardVariants = cva('text-card-foreground flex flex-col rounded-xl', {
  variants: {
    level: {
      0: 'bg-background-base',
      1: 'bg-background-bloc',
      2: 'bg-background-primary border border-border-primary',
      3: 'bg-background-secondary border border-border-primary',
      4: 'bg-background-tertiary border border-border-primary',
    },
    rounded: {
      sm: 'rounded-xl',
      md: 'rounded-2xl',
      lg: 'rounded-3xl',
      xl: 'rounded-4xl',
      none: 'rounded-none',
    },
    gap: {
      none: 'gap-0',
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
      xl: 'gap-10',
    },
    padY: {
      none: 'py-0',
      sm: 'py-4',
      md: 'py-6',
      lg: 'py-8',
      xl: 'py-10',
    },
  },
  defaultVariants: {
    level: 1,
    rounded: 'md',
    gap: 'md',
    padY: 'md',
  },
})

function Card({
  className,
  level,
  rounded,
  gap,
  padY,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ level, rounded, gap, padY, className }))}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('px-6', className)} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }

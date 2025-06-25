import { cn } from '@repo/ui'
import { RequiredAriaLabel } from '../../utils/accessibility'

export interface ReceiptItem {
  label: string
  value: React.ReactNode
  key?: string | number
}

export interface ReceiptViewProps extends RequiredAriaLabel {
  items: ReceiptItem[]

  listClassName?: string
  itemClassName?: string
  itemLabelClassName?: string
  itemValueClassName?: string
}

export function ReceiptView({
  items,
  listClassName,
  itemClassName,
  itemLabelClassName,
  itemValueClassName,
  ...ariaProps
}: ReceiptViewProps) {
  return (
    <dl className={cn('flex flex-col gap-2', listClassName)} {...ariaProps}>
      {items.map(item => (
        <div
          key={item.key}
          className={cn('flex justify-between', itemClassName)}
          role="group"
          aria-labelledby={`label-${item.key}`}
          aria-describedby={`value-${item.key}`}
        >
          <dt id={`label-${item.key}`} className={cn('font-bold', itemLabelClassName)}>
            {item.label}:
          </dt>
          <dd id={`value-${item.key}`} className={cn(itemValueClassName)}>
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

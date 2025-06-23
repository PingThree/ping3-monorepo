import { omit, pick } from 'lodash-es'
import { tv, type VariantProps } from 'tailwind-variants'
import {
  alignItemsVariants,
  heightVariants,
  justifyVariants,
  paddingVariants,
  widthVariants,
  xSpacingVariants,
} from '../../variants'

const hStack = tv({
  base: 'flex flex-row',
  variants: {
    justify: justifyVariants,
    align: alignItemsVariants,
    spacing: xSpacingVariants,
    padd: paddingVariants,
    height: heightVariants,
    width: widthVariants,
  },
})

interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof hStack> {}

const variantKeys = Object.keys(hStack.variants) as (keyof typeof hStack.variants)[]

export function HStack({ className, ...rest }: Props) {
  const variantProps = pick(rest, variantKeys)
  const props = omit(rest, variantKeys)

  return <div className={hStack({ ...variantProps, className })} {...props} />
}

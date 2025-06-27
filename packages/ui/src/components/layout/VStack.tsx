import { omit, pick } from 'lodash-es'
import { tv, type VariantProps } from 'tailwind-variants'
import {
  alignItemsVariants,
  heightVariants,
  justifyVariants,
  paddingVariants,
  widthVariants,
  ySpacingVariants,
} from '../../variants'

const vStack = tv({
  base: 'flex flex-col',
  variants: {
    justify: justifyVariants,
    align: alignItemsVariants,
    spacing: ySpacingVariants,
    padd: paddingVariants,
    height: heightVariants,
    width: widthVariants,
  },
})

interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof vStack> {}

const variantKeys = Object.keys(vStack.variants) as (keyof typeof vStack.variants)[]

export function VStack({ className, ...rest }: Props) {
  const variantProps = pick(rest, variantKeys)
  const props = omit(rest, variantKeys)

  return <div className={vStack({ ...variantProps, className })} {...props} />
}

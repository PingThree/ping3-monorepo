import { omit, pick } from 'lodash-es'
import { tv, type VariantProps } from 'tailwind-variants'
import {
  bgColorVariants,
  borderRadiusVariants,
  borderVariants,
  centerVariants,
  flexVariants,
  heightVariants,
  marginVariants,
  overflowVariants,
  paddingVariants,
  widthVariants,
} from '../../variants'

const box = tv({
  variants: {
    bg: bgColorVariants,
    padd: paddingVariants,
    margin: marginVariants,
    overflow: overflowVariants,
    border: borderVariants,
    borderRadius: borderRadiusVariants,
    width: widthVariants,
    height: heightVariants,
    center: centerVariants,
    flex: flexVariants,
  },
})

interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof box> {}

const variantKeys = Object.keys(box.variants) as (keyof typeof box.variants)[]

export function Box({ className, ...rest }: Props) {
  const variantProps = pick(rest, variantKeys)
  const props = omit(rest, variantKeys)

  return <div className={box({ ...variantProps, className })} {...props} />
}

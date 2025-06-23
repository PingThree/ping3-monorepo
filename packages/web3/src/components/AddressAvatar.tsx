'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui'

export function AddressAvatar({
  address,
  ensImage,
  size = 24,
}: {
  address: string
  ensImage?: string | null
  size: number
}) {
  const avatarUrl = ensImage
    ? ensImage
    : `https://api.dicebear.com/7.x/pixel-art/svg?seed=${address}`

  return (
    <Avatar style={{ width: size, height: size }}>
      <AvatarImage src={avatarUrl} alt="Wallet avatar" />
      <AvatarFallback>0x</AvatarFallback>
    </Avatar>
  )
}

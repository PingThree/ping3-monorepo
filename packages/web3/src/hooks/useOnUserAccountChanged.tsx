'use client'

import { useIsMounted } from '@repo/utils'
import { useUserAccount } from '@repo/web3'
import { useEffect, useState } from 'react'
import { Address } from 'viem'

export function useOnUserAccountChanged(callback?: () => void) {
  const [prevUserAddress, setPrevUserAddress] = useState<Address>()
  const { userAddress } = useUserAccount()
  const isMounted = useIsMounted()

  useEffect(() => {
    if (isMounted && prevUserAddress !== ('' as Address)) {
      callback?.()
    }
    setPrevUserAddress(userAddress)
  }, [userAddress])

  return {
    prevUserAddress,
  }
}

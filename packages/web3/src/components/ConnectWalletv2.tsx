'use client'

import { useAppKit } from '@reown/appkit/react'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@repo/ui'
import { abbreviateAddress, useIsMounted } from '@repo/utils'
import { useConnect } from 'wagmi'
import { isE2E_Next } from '../configs/process'
import { useChains } from '../hooks/useChains'
import { useUserAccount } from '../providers/UserAccountProvider'
import { AddressAvatar } from './AddressAvatar'

function MockWalletConnect() {
  const { connectors, connect } = useConnect()
  const { isConnected, userAddress } = useUserAccount()

  const mockConnector = connectors[0]

  if (!mockConnector) {
    return null
  }

  if (isConnected && userAddress) {
    return <Button>Connected ({abbreviateAddress(userAddress)})</Button>
  }

  return <Button onClick={() => connect({ connector: mockConnector })}>Mock connect</Button>
}

export function ConnectWalletV2({ ...rest }) {
  const isMounted = useIsMounted()
  const { isConnected, chain, userAddress, ensName, ensAvatar, switchNetwork } = useUserAccount()
  const { open } = useAppKit()
  const chains = useChains()

  if (isE2E_Next) {
    return <MockWalletConnect />
  }

  if (!isConnected || !userAddress || !isMounted) {
    return (
      <Button color="primary" disabled={!isMounted} onClick={() => open()} {...rest}>
        Connect wallet
      </Button>
    )
  }

  return (
    <div className="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon">
            {chain?.custom?.iconUrl ? (
              <img
                src={chain.custom.iconUrl || ''}
                alt={chain.name || ''}
                className="w-5 h-5"
                width={20}
                height={20}
              />
            ) : (
              chain?.name
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" side="bottom" align="end">
          {chains.map(networkChain => (
            <DropdownMenuItem
              key={networkChain.id}
              onClick={() => switchNetwork(networkChain)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="flex items-center gap-2 w-full">
                <img
                  src={networkChain.custom?.iconUrl || ''}
                  alt={networkChain.name || 'Chain icon'}
                  className="w-6 h-6 rounded-full"
                  width={24}
                  height={24}
                />
                <span className="flex-1 text-left">{networkChain.name}</span>
                {chain?.id === networkChain.id && (
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                )}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="secondary" onClick={() => open()} {...rest}>
        <AddressAvatar ensImage={ensAvatar as string} address={userAddress} size={20} />
        {ensName ?? abbreviateAddress(userAddress)}
      </Button>
    </div>
  )
}

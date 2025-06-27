'use client'

import { Chain, fallback, http } from 'viem'
import { mainnet } from 'viem/chains'
import { createConfig, mock } from 'wagmi'
import { isE2E_Next } from '../configs/process'
import { ChainId } from '../web3.types'

const mockConnectors = mock({
  accounts: ['0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'], // Default anvil account
  features: { defaultConnected: true },
})

interface UseE2EConfigOptions {
  ssr?: boolean
  isE2E?: boolean
}

export function getE2ERpcUrl(): string | undefined {
  if (typeof window !== 'undefined') {
    try {
      const testRpcUrl = localStorage.getItem('testRpcUrl')
      return testRpcUrl ?? undefined
    } catch (error) {
      console.warn('Error accessing localStorage:', error)
      return undefined
    }
  }

  return undefined
}

export function useE2EConfig({ ssr = true, isE2E = isE2E_Next }: UseE2EConfigOptions = {}) {
  if (!isE2E) {
    return undefined
  }

  const testRpcUrl = getE2ERpcUrl()

  if (!testRpcUrl) {
    console.warn('E2E test RPC URL is not set. Please set the "testRpcUrl" in localStorage.')
    return undefined
  }

  const transports = {
    [ChainId.Mainnet]: fallback([http(testRpcUrl)]),
  }
  const customMainnet: Chain = {
    ...mainnet,
    rpcUrls: { default: { http: [testRpcUrl] } },
  }

  const chains = [customMainnet] as readonly [Chain, ...Chain[]]

  const connectors = [mockConnectors]

  return createConfig({
    ssr,
    chains,
    connectors,
    transports,
  })
}

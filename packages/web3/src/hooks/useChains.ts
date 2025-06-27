import { useConfig } from 'wagmi'
import { AppChain } from '../configs/chains'

export function useChains(): AppChain[] {
  const { chains } = useConfig()
  return chains as [AppChain, ...AppChain[]]
}

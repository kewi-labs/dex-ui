/* eslint-disable prettier/prettier */
import { ChainId } from '@uniswap/sdk-core'

export function getNativeSymbol(chainId?: number) {
  if (chainId === 143) return 'MON'
  return 'ETH'
}

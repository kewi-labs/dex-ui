import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { Currency, Token, WETH9 } from '../entities'
import { MONAD } from '../entities/ether'  // <-- ADD THIS
/**
 * Given a currency which can be Ether or a token, return wrapped ether for ether and the token for the token
 * @param currency the currency to wrap, if necessary
 * @param chainId the ID of the chain for wrapping
 */
export function wrappedCurrency(currency: Currency, chainId: ChainId): Token {
  // ERC20 token → return itself
  if (currency.isToken) {
    invariant(currency.chainId === chainId, 'CHAIN_ID')
    return currency
  }

  // MON native → WMON
  if (currency === MONAD && chainId === ChainId.MONAD) {
    return WETH9[ChainId.MONAD]
  }

  // ETH native → WETH
  if (currency.isEther) {
    return WETH9[chainId]
  }

  throw new Error('CURRENCY')
}


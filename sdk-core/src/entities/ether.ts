import { BaseCurrency } from './baseCurrency'

export class Ether extends BaseCurrency {
  public readonly isEther: true = true
  public readonly isToken: false = false

  protected constructor(symbol: string, name: string) {
    super(18, symbol, name)
  }

  public static readonly ETHER: Ether = new Ether('ETH', 'Ether')
  public static readonly MONAD: Ether = new Ether('MON', 'Monad')
}

export const ETHER = Ether.ETHER
export const MONAD = Ether.MONAD


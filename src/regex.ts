import { units } from './units'

const shortTokens = [...units]
  .sort((a, b) => (b.short || '').length - (a.short || '').length)
  .map(x => x.short)
  .filter(x => x !== undefined)
  .join('|')

const longTokens = [...units]
  .sort((a, b) => b.token.length - a.token.length)
  .map(x => x.token)
  .join('|')

export const rx = new RegExp(
  `(?:(\\d+) ?(${longTokens})s?|(\\d+)(${shortTokens}))`,
  'g'
)

import { keywords } from './keywords'
import { resolveNumeral } from './numerals'
import { rx, splitRX } from './regex'
import { resolveUnit } from './units'

const parseToken = (str: string) => {
  const [, len, u] = str.split(splitRX).map(x => x.trim())
  const length = resolveNumeral(len)

  const unit = resolveUnit(u)
  if (unit === undefined) return 0
  else return length * unit.value
}

export const parse: (input: string) => number | undefined = input => {
  if (typeof input !== 'string') return undefined
  const str = input.toLowerCase().trim()

  const matches = str.match(rx)
  if (matches !== null) {
    const resolved = matches.reduce((acc, curr) => {
      const value = parseToken(curr)
      return acc + value
    }, 0)

    return resolved
  }

  const kw = keywords.find(x => x.token === str)
  if (kw !== undefined) return kw.value

  return undefined
}

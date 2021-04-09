import { keywords } from './keywords.js'
import { resolveNumeral } from './numerals.js'
import { rx, splitRX } from './regex.js'
import { resolveUnit } from './units.js'

const parseToken = (string: string) => {
  const [, length_, u] = string.split(splitRX).map(x => x.trim())
  const length = resolveNumeral(length_)

  const unit = resolveUnit(u)
  return length * unit
}

export const parse: (input: string) => number | undefined = input => {
  if (typeof input !== 'string') return undefined
  const string = input.toLowerCase().trim()

  // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
  const matches = string.match(rx)
  if (matches !== null) {
    // eslint-disable-next-line unicorn/no-array-reduce
    const resolved = matches.reduce((acc, curr) => {
      const value = parseToken(curr)
      return acc + value
    }, 0)

    return resolved
  }

  const kw = keywords.find(x => x.token === string)
  if (kw !== undefined) return kw.value

  return undefined
}

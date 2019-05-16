import { keywords } from './keywords'
import { rx } from './regex'
import { resolveUnit } from './units'

const parseToken = (str: string) => {
  const [, len, u] = str.split(/(\d+)/g).map(x => x.trim())
  const length = parseInt(len, 10)

  const unit = resolveUnit(u)
  if (unit === undefined) return undefined
  else return length * unit.value
}

export const parse: (input: string) => number | undefined = input => {
  if (typeof input !== 'string') return undefined
  const str = input.toLowerCase().trim()

  const matches = str.match(rx)
  if (matches !== null) {
    const resolved = matches.reduce(
      (acc, curr) => {
        if (acc === undefined) return undefined

        const value = parseToken(curr)
        if (value === undefined) return undefined
        else return acc + value
      },
      0 as number | undefined
    )

    return resolved
  }

  const kw = keywords.find(x => x.token === str)
  if (kw !== undefined) return kw.value

  return undefined
}

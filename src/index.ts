import { resolveUnit } from './units'

const simpleParse = (str: string) => {
  const [, len, u] = str.split(/(\d+)/g)
  const length = parseInt(len, 10)

  const unit = resolveUnit(u)
  if (unit === undefined) return undefined
  else return length * unit
}

export const parse: (input: string) => number | undefined = input => {
  const str = input.toLowerCase().trim()

  const simpleRX = /(\d+)(mo|s|m|h|d|w|y)/g
  const simpleMatches = str.match(simpleRX)
  if (simpleMatches !== null) {
    const resolved = simpleMatches.reduce(
      (acc, curr) => {
        if (acc === undefined) return undefined

        const value = simpleParse(curr)
        if (value === undefined) return undefined
        else return acc + value
      },
      0 as number | undefined
    )

    return resolved
  }

  return undefined
}

interface INumeral {
  token: string
  value: number
}

export const numerals: INumeral[] = [
  { token: 'one', value: 1 },
  { token: 'two', value: 2 },
  { token: 'three', value: 3 },
  { token: 'four', value: 4 },
  { token: 'five', value: 5 },
  { token: 'six', value: 6 },
  { token: 'seven', value: 7 },
  { token: 'eight', value: 8 },
  { token: 'nine', value: 9 },
  { token: 'ten', value: 10 },
]

export const resolveNumeral: (str: string) => number = str => {
  if (typeof str !== 'string') return 0
  const input = str.trim().toLowerCase()

  const value = parseInt(input, 10)
  if (!Number.isNaN(value)) return value

  const numeral = numerals.find(x => x.token === input)
  if (numeral !== undefined) return numeral.value

  return 0
}

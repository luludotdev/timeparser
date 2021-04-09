export const SECOND = 1000
export const MINUTE = SECOND * 60
export const HOUR = MINUTE * 60
export const DAY = HOUR * 24
export const WEEK = DAY * 7
export const MONTH = DAY * 31
export const YEAR = DAY * 365

interface IUnit {
  token: string
  short?: string
  value: number
}

export const units: IUnit[] = [
  { token: 'second', short: 's', value: SECOND },
  { token: 'minute', short: 'm', value: MINUTE },
  { token: 'hour', short: 'h', value: HOUR },
  { token: 'day', short: 'd', value: DAY },
  { token: 'week', short: 'w', value: WEEK },
  { token: 'fortnight', value: WEEK * 2 },
  { token: 'month', short: 'mo', value: MONTH },
  { token: 'year', short: 'y', value: YEAR },
].map(({ token, short, value }) => ({
  short: short?.toLowerCase(),
  token: token.toLowerCase(),
  value,
}))

export const resolveUnit: (string: string) => number = string => {
  if (typeof string !== 'string') return 0
  const input = string.trim().toLowerCase()

  const unit = units.find(
    x => x.token === input || x.short === input || `${x.token}s` === input
  )

  return unit !== undefined ? unit.value : 0
}

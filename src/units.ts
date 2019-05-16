export const SECOND = 1000
export const MINUTE = SECOND * 60
export const HOUR = MINUTE * 60
export const DAY = HOUR * 24
export const WEEK = DAY * 7
export const MONTH = DAY * 31
export const YEAR = DAY * 365

export const resolveUnit = (str: string) => {
  switch (str) {
    case 's':
    case 'second':
    case 'seconds':
      return SECOND
    case 'm':
    case 'minute':
    case 'minutes':
      return MINUTE
    case 'h':
    case 'hour':
    case 'hours':
      return HOUR
    case 'd':
    case 'day':
    case 'days':
      return DAY
    case 'w':
    case 'week':
    case 'weeks':
      return WEEK
    case 'mo':
    case 'month':
    case 'months':
      return MONTH
    case 'y':
    case 'year':
    case 'years':
      return YEAR
    default:
      return undefined
  }
}

const UNITS = {
  DAY,
  HOUR,
  MINUTE,
  MONTH,
  SECOND,
  WEEK,
  YEAR,
}

export default UNITS

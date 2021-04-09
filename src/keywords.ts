import { DAY } from './units.js'

interface IKeyword {
  token: string
  value: number
}

export const keywords: IKeyword[] = [{ token: 'tomorrow', value: DAY }]

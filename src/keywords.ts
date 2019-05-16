import { DAY } from './units'

interface IKeyword {
  token: string
  value: number
}

export const keywords: IKeyword[] = [{ token: 'tomorrow', value: DAY }]

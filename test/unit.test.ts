import test from 'ava'
import {
  DAY,
  HOUR,
  MINUTE,
  MONTH,
  resolveUnit,
  SECOND,
  WEEK,
  YEAR,
} from '../src/units.js'

test('resolves valid values', t => {
  t.is(resolveUnit('second'), SECOND)
  t.is(resolveUnit('minute'), MINUTE)
  t.is(resolveUnit('HOUR'), HOUR)
  t.is(resolveUnit('DaYs'), DAY)
  t.is(resolveUnit('weEK'), WEEK)
  t.is(resolveUnit('forTnight'), WEEK * 2)
  t.is(resolveUnit('MONtH'), MONTH)
  t.is(resolveUnit('YEARS'), YEAR)
})

test('does not resolve invalid values', t => {
  t.is(resolveUnit('unit'), 0)

  // @ts-expect-error No Arguments
  t.is(resolveUnit(), 0)
  // @ts-expect-error Invalid Argument
  t.is(resolveUnit(7), 0)
})

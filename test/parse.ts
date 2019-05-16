import test from 'ava'
import { parse } from '../src/index'
import { DAY, HOUR, MINUTE, MONTH, SECOND, WEEK, YEAR } from '../src/units'

test('parses simple short form', t => {
  // Seconds
  t.is(parse('1s'), SECOND * 1)
  t.is(parse('2s'), SECOND * 2)
  t.is(parse('5s'), SECOND * 5)

  // Minutes
  t.is(parse('1m'), MINUTE * 1)
  t.is(parse('2m'), MINUTE * 2)
  t.is(parse('5m'), MINUTE * 5)

  // Hours
  t.is(parse('1h'), HOUR * 1)
  t.is(parse('2h'), HOUR * 2)
  t.is(parse('5h'), HOUR * 5)

  // Days
  t.is(parse('1d'), DAY * 1)
  t.is(parse('2d'), DAY * 2)
  t.is(parse('5d'), DAY * 5)

  // Weeks
  t.is(parse('1w'), WEEK * 1)
  t.is(parse('2w'), WEEK * 2)
  t.is(parse('5w'), WEEK * 5)

  // Months
  t.is(parse('1mo'), MONTH * 1)
  t.is(parse('2mo'), MONTH * 2)
  t.is(parse('5mo'), MONTH * 5)

  // Years
  t.is(parse('1y'), YEAR * 1)
  t.is(parse('2y'), YEAR * 2)
  t.is(parse('5y'), YEAR * 5)
})

test('parses complex short form', t => {
  t.is(parse('1m50s'), MINUTE + 50 * SECOND)

  t.is(parse('3h2m'), HOUR * 3 + MINUTE * 2)
  t.is(parse('3h 2m'), HOUR * 3 + MINUTE * 2)
})

test.todo('parses simple long form')
test.todo('parses complex long form')
test.todo('parses keywords')
test.todo('fails on invalid input')

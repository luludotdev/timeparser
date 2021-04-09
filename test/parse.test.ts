import test from 'ava'
import { parse } from '../src/index.js'
import { DAY, HOUR, MINUTE, MONTH, SECOND, WEEK, YEAR } from '../src/units.js'

test('parses simple short form', t => {
  // Seconds
  t.is(parse('1s'), Number(SECOND))
  t.is(parse('2s'), SECOND * 2)
  t.is(parse('5s'), SECOND * 5)

  // Minutes
  t.is(parse('1m'), Number(MINUTE))
  t.is(parse('2m'), MINUTE * 2)
  t.is(parse('5m'), MINUTE * 5)

  // Hours
  t.is(parse('1h'), Number(HOUR))
  t.is(parse('2h'), HOUR * 2)
  t.is(parse('5h'), HOUR * 5)

  // Days
  t.is(parse('1d'), Number(DAY))
  t.is(parse('2d'), DAY * 2)
  t.is(parse('5d'), DAY * 5)

  // Weeks
  t.is(parse('1w'), Number(WEEK))
  t.is(parse('2w'), WEEK * 2)
  t.is(parse('5w'), WEEK * 5)

  // Months
  t.is(parse('1mo'), Number(MONTH))
  t.is(parse('2mo'), MONTH * 2)
  t.is(parse('5mo'), MONTH * 5)

  // Years
  t.is(parse('1y'), Number(YEAR))
  t.is(parse('2y'), YEAR * 2)
  t.is(parse('5y'), YEAR * 5)
})

test('parses complex short form', t => {
  t.is(parse('1m50s'), MINUTE + 50 * SECOND)

  t.is(parse('3h2m'), HOUR * 3 + MINUTE * 2)
  t.is(parse('3h 2m'), HOUR * 3 + MINUTE * 2)
})

test('parses simple long form', t => {
  // Seconds
  t.is(parse('1 second'), Number(SECOND))
  t.is(parse('2 seconds'), SECOND * 2)
  t.is(parse('5 seconds'), SECOND * 5)

  // Minutes
  t.is(parse('1 minute'), Number(MINUTE))
  t.is(parse('2 minutes'), MINUTE * 2)
  t.is(parse('5 minutes'), MINUTE * 5)

  // Hours
  t.is(parse('1 hour'), Number(HOUR))
  t.is(parse('2 hours'), HOUR * 2)
  t.is(parse('5 hours'), HOUR * 5)

  // Days
  t.is(parse('1 day'), Number(DAY))
  t.is(parse('2 days'), DAY * 2)
  t.is(parse('5 days'), DAY * 5)

  // Weeks
  t.is(parse('1 week'), Number(WEEK))
  t.is(parse('2 weeks'), WEEK * 2)
  t.is(parse('5 weeks'), WEEK * 5)

  // Months
  t.is(parse('1 month'), Number(MONTH))
  t.is(parse('2 months'), MONTH * 2)
  t.is(parse('5 months'), MONTH * 5)

  // Years
  t.is(parse('1 year'), Number(YEAR))
  t.is(parse('2 years'), YEAR * 2)
  t.is(parse('5 years'), YEAR * 5)
})

test('parses complex long form', t => {
  t.is(parse('1 minute 50 seconds'), MINUTE + 50 * SECOND)

  t.is(parse('3 hours 2 minutes'), HOUR * 3 + MINUTE * 2)
  t.is(parse('3 hours and 2 minutes'), HOUR * 3 + MINUTE * 2)
})

test('parses long form with written numerals', t => {
  t.is(parse('one minute 50 seconds'), MINUTE + 50 * SECOND)

  t.is(parse('three hours 2 minutes'), HOUR * 3 + MINUTE * 2)
  t.is(parse('3 hours and two minutes'), HOUR * 3 + MINUTE * 2)
})

test('parses a mix of simple and complex', t => {
  t.is(parse('2 weeks 5h'), WEEK * 2 + HOUR * 5)
  t.is(parse('1m 35 seconds'), MINUTE + SECOND * 35)
})

test('parses keywords', t => {
  t.is(parse('tomorrow'), Number(DAY))
})

test('fails on invalid input', t => {
  t.is(parse('invalid input'), undefined)
  t.is(parse('1 minuet'), undefined)
  t.is(parse('2z'), undefined)
  t.is(parse('tomorrwo'), undefined)
  t.is(parse(''), undefined)

  // @ts-expect-error
  t.is(parse(), undefined)
  // @ts-expect-error
  t.is(parse(10), undefined)
})

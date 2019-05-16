import test from 'ava'
import { resolveNumeral } from '../src/numerals'

test('resolves valid values', t => {
  t.is(resolveNumeral('one'), 1)
  t.is(resolveNumeral('TWO'), 2)
  t.is(resolveNumeral('three'), 3)
  t.is(resolveNumeral('fOuR'), 4)
  t.is(resolveNumeral('five'), 5)
  t.is(resolveNumeral('siX'), 6)
  t.is(resolveNumeral('seven'), 7)
  t.is(resolveNumeral('eiGHT'), 8)
  t.is(resolveNumeral('nine'), 9)
  t.is(resolveNumeral('TEn'), 10)
})

test('does not resolve invalid values', t => {
  t.is(resolveNumeral('number'), 0)

  // @ts-ignore
  t.is(resolveNumeral(), 0)
  // @ts-ignore
  t.is(resolveNumeral(7), 0)
})

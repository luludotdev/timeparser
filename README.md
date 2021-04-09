# ⏰ Timeparser
![Node.js CI](https://github.com/lolPants/timeparser/workflows/Node.js%20CI/badge.svg?branch=master)
[![NPM version](https://img.shields.io/npm/v/@lolpants/timeparser.svg?maxAge=3600)](https://www.npmjs.com/package/@lolpants/timeparser)
[![NPM downloads](https://img.shields.io/npm/dt/@lolpants/timeparser.svg?maxAge=3600)](https://www.npmjs.com/package/@lolpants/timeparser)
[![Dependencies](https://img.shields.io/david/lolpants/timeparser.svg?maxAge=3600)](https://david-dm.org/lolpants/timeparser)
> Parse complex length strings to a millisecond value

## 💾 Installation
The package is on the NPM registry as `@lolpants/timeparser`. Simply install it with your NPM client of choice.

## 🔧 Usage
```ts
import { parse } from 'timeparser'

// Parse
const len = parse('1 minute')
// => 60000
```

Check `/test/parse.test.ts` for examples of parsable strings.

# ⏰ Timeparser
[![NPM version](https://img.shields.io/npm/v/@lolpants/timeparser.svg?maxAge=3600)](https://www.npmjs.com/package/@lolpants/timeparser)
[![NPM downloads](https://img.shields.io/npm/dt/@lolpants/timeparser.svg?maxAge=3600)](https://www.npmjs.com/package/@lolpants/timeparser)
[![Build status](https://travis-ci.com/lolPants/timeparser.svg)](https://travis-ci.com/lolPants/timeparser)
[![Dependencies](https://img.shields.io/david/lolpants/timeparser.svg?maxAge=3600)](https://david-dm.org/lolpants/timeparser)
[![Coverage Status](https://coveralls.io/repos/github/lolPants/timeparser/badge.svg?branch=master)](https://coveralls.io/github/lolPants/timeparser?branch=master)

_Parse complex length strings to a millisecond value_  
Written in TypeScript, compiled down to ES5 for use in any Node.js version!

## 💾 Installation
The package is on the NPM registry as `@lolpants/timeparser`. Simply install it with your NPM client of choice.

## 🔧 Usage
```ts
// Import (CommonJS)
const { parse } = require('timeparser')

// Import (ESM)
import { parse } from 'timeparser'

// Parse
const len = parse('1 minute')
// => 60000
```

Check `/tests/parser.ts` for examples of parsable strings.

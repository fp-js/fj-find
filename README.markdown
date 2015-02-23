# fj-find

[![Build Status](https://travis-ci.org/fp-js/fj-find.svg)](https://travis-ci.org/fp-js/fj-find) [![npm version](https://badge.fury.io/js/fj-find.svg)](http://badge.fury.io/js/fj-find)
> find FP style.

## Installation

`npm install fj-find --save`

## Usage

```js
var find = require('fj-find');

let isOdd = (x) => x & 1;

find(isOdd, [1,2,3]) // 1

let getOdds = find(isOdd);

getOdds([1,2,3]) // 1
```

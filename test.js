"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var find = _interopRequire(require("./"));

var odd = function (x) {
  return x & 1;
};

it("fj-find", function () {
  assert.deepEqual(find(odd, [1, 2, 3]), 1);
  var findOdd = find(odd);
  assert.deepEqual(findOdd([1, 2, 3]), 1);
});
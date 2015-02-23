"use strict";

var curry2 = require("fj-curry").curry2;


var find = function (fn, list) {
  var index = -1,
      listLen = list.length;

  while (++index < listLen) {
    if (fn(list[index])) {
      return list[index];
    }
  }
};

module.exports = curry2(find);
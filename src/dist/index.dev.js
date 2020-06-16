"use strict";

var _userApi = require("./api/userApi");

var _numeral = _interopRequireDefault(require("numeral"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var courseValue = (0, _numeral["default"])(1000).format("$0,0.00");
console.log("I would pay ".concat(courseValue, " for this awesome course!"));
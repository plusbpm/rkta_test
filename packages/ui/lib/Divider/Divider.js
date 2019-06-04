"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Atom = _interopRequireDefault(require("../Atom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Divider = function Divider(props) {
  return _react["default"].createElement(_Atom["default"], _extends({
    element: "hr"
  }, props));
};

var _default = Divider;
exports["default"] = _default;
//# sourceMappingURL=Divider.js.map
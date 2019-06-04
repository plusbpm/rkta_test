"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Atom = function Atom(_ref) {
  var atomRef = _ref.atomRef,
      children = _ref.children,
      css = _ref.css,
      _ref$element = _ref.element,
      Element = _ref$element === void 0 ? 'div' : _ref$element,
      rest = _objectWithoutProperties(_ref, ["atomRef", "children", "css", "element"]);

  return (0, _core.jsx)(Element, _extends({}, rest, {
    css: css,
    ref: atomRef
  }), children);
};

Atom.defaultProps = {
  children: null,
  element: 'div'
};
var _default = Atom;
exports["default"] = _default;
//# sourceMappingURL=Atom.js.map
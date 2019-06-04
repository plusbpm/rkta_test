"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _defaultTheme = _interopRequireDefault(require("./theme/defaultTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _react.createContext)({
  theme: _defaultTheme["default"]
});

exports["default"] = _default;
//# sourceMappingURL=Context.js.map
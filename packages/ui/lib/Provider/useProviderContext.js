"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useProviderContext;

var _react = require("react");

var _Context = _interopRequireDefault(require("./Context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useProviderContext() {
  return (0, _react.useContext)(_Context["default"]);
}
//# sourceMappingURL=useProviderContext.js.map
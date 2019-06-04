"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("./color"));

var Addon = _interopRequireWildcard(require("../../Addon/Addon.styles"));

var Bage = _interopRequireWildcard(require("../../Bage/Bage.styles"));

var Divider = _interopRequireWildcard(require("../../Divider/Divider.styles"));

var Paper = _interopRequireWildcard(require("../../Paper/Paper.styles"));

var Svg = _interopRequireWildcard(require("../../Svg/Svg.styles"));

var Text = _interopRequireWildcard(require("../../Text/Text.styles"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  color: _color["default"],
  Addon: Addon,
  Bage: Bage,
  Divider: Divider,
  Svg: Svg,
  Paper: Paper,
  Text: Text
};
exports["default"] = _default;
//# sourceMappingURL=defaultTheme.js.map
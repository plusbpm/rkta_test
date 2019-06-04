"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.size = exports.color = exports.block = exports.initialStyle = void 0;
var initialStyle = {
  fill: 'currentColor',
  verticalAlign: 'middle'
};
exports.initialStyle = initialStyle;
var block = {
  display: 'block'
};
exports.block = block;

var color = function color(theme, props) {
  return {
    fill: theme.color[props.color] || props.color
  };
};

exports.color = color;

var size = function size(theme, props) {
  var sizeValue = props.size;
  return {
    height: sizeValue,
    width: sizeValue
  };
};

exports.size = size;
//# sourceMappingURL=Svg.styles.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transparent = exports.size = exports.rounded = exports.round = exports.rize = exports.hardRight = exports.hardTop = exports.hardLeft = exports.hardBottom = exports.hard = exports.disabled = exports.clip = exports.bgColor = exports.initialStyle = void 0;

var initialStyle = function initialStyle(theme) {
  return {
    borderRadius: '3px',
    boxSizing: 'border-box',
    backgroundColor: theme.color.paper,
    position: 'relative'
  };
};

exports.initialStyle = initialStyle;

var bgColor = function bgColor(theme, props) {
  return {
    backgroundColor: theme.color[props.bgColor] || props.bgColor
  };
};

exports.bgColor = bgColor;
var clip = {
  overflow: 'hidden'
};
exports.clip = clip;
var disabled = {
  opacity: 0.4,
  pointerEvents: 'none',
  userSelect: 'none'
};
exports.disabled = disabled;
var hard = {
  borderRadius: 0
};
exports.hard = hard;
var hardBottom = {
  borderBottomLeftRadius: '0',
  borderBottomRightRadius: '0'
};
exports.hardBottom = hardBottom;
var hardLeft = {
  borderBottomLeftRadius: '0',
  borderTopLeftRadius: '0'
};
exports.hardLeft = hardLeft;
var hardTop = {
  borderTopLeftRadius: '0',
  borderTopRightRadius: '0'
};
exports.hardTop = hardTop;
var hardRight = {
  borderBottomRightRadius: '0',
  borderTopRightRadius: '0'
};
exports.hardRight = hardRight;

var rize = function rize(theme, props) {
  var rizeValue = props.rize;
  var blur = Math.max(Math.pow(rizeValue, 3), 5);
  return {
    boxShadow: "\n      0px ".concat(rizeValue, "px ").concat(blur, "px 0px rgba(0, 0, 0, 0.2),\n      0px ").concat(rizeValue * 2, "px ").concat(blur / 2, "px 0px rgba(0, 0, 0, 0.14),\n      0px ").concat(rizeValue * 3, "px ").concat(blur / rizeValue, "1px ").concat(-rizeValue / 2, "px rgba(0, 0, 0, 0.12)\n    ")
  };
};

exports.rize = rize;
var round = {
  borderRadius: '50%'
};
exports.round = round;
var rounded = {
  borderRadius: '9999vw'
};
exports.rounded = rounded;

var size = function size(theme, props) {
  return {
    width: props.size,
    height: props.size
  };
};

exports.size = size;
var transparent = {
  backgroundColor: 'transparent'
};
exports.transparent = transparent;
//# sourceMappingURL=Paper.styles.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialStyle = initialStyle;
exports.invisible = exports.inset = exports.fitTop = exports.fitBottom = exports.fitAll = exports.dotted = void 0;

function initialStyle(theme) {
  return {
    border: '0',
    height: '0',
    borderTop: "1px solid ".concat(theme.color.divider),
    marginBottom: '8px',
    marginTop: '8px'
  };
}

var dotted = {
  borderStyle: 'dotted'
};
exports.dotted = dotted;
var fitAll = {
  margin: 0
};
exports.fitAll = fitAll;
var fitBottom = {
  marginBottom: 0
};
exports.fitBottom = fitBottom;
var fitTop = {
  marginTop: 0
};
exports.fitTop = fitTop;
var inset = {
  marginLeft: '72px'
};
exports.inset = inset;
var invisible = {
  visibility: 'hidden'
};
exports.invisible = invisible;
//# sourceMappingURL=Divider.styles.js.map
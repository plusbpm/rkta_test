"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.overline = exports.caption = exports.button = exports.body2 = exports.subtitle2 = exports.subtitle1 = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.hyphens = exports.wrap = exports.nowrap = exports.readOnly = exports.etched = exports.center = exports.muted = exports.baseline = exports.uppercase = exports.monospace = exports.serif = exports.color = exports.initialStyle = void 0;

var initialStyle = function initialStyle(theme) {
  return {
    fontFamily: '"San Francisco", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: '0.15px',
    lineHeight: '24px',
    textRendering: 'optimizeLegibility',
    textDecoration: 'none',
    color: theme.color.text
  };
};

exports.initialStyle = initialStyle;

var color = function color(theme, props) {
  return {
    color: props.color ? theme.color[props.color] || props.color : 'inherit'
  };
};

exports.color = color;
var serif = {
  fontFamily: '"Playfair Display", Bookman, Palatino, Georgia, serif'
};
exports.serif = serif;
var monospace = {
  fontFamily: '"Lucida Sans Typewriter", "Lucida Console", "Consolas", "Andale Mono", "Monaco", "Courier New", Courier, monospace'
};
exports.monospace = monospace;
var uppercase = {
  textTransform: 'uppercase',
  letterSpacing: '0.75px'
};
exports.uppercase = uppercase;
var baseline = {
  margin: 0,
  padding: 0
};
exports.baseline = baseline;
var muted = {
  opacity: 0.4,
  userSelect: 'none'
};
exports.muted = muted;
var center = {
  textAlign: 'center'
};
exports.center = center;
var etched = {
  textShadow: '0 1px rgba(255, 255, 255, 0.24)'
};
exports.etched = etched;
var readOnly = {
  pointerEvents: 'none',
  userSelect: 'none'
};
exports.readOnly = readOnly;
var nowrap = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
};
exports.nowrap = nowrap;
var wrap = {
  overflowWrap: 'break-word',
  wordWrap: 'break-word'
};
exports.wrap = wrap;
var hyphens = {
  hyphens: 'auto'
}; // size

exports.hyphens = hyphens;
var h1 = {
  fontSize: '96px',
  fontWeight: 'lighter',
  lineHeight: '96px',
  letterSpacing: '-1.5px'
};
exports.h1 = h1;
var h2 = {
  fontSize: '60px',
  fontWeight: 'lighter',
  lineHeight: '60px',
  letterSpacing: '-0.5px'
};
exports.h2 = h2;
var h3 = {
  fontSize: '48px',
  fontWeight: 400,
  lineHeight: '48px'
};
exports.h3 = h3;
var h4 = {
  fontSize: '34px',
  fontWeight: 400,
  lineHeight: '40px',
  letterSpacing: '0.25px'
};
exports.h4 = h4;
var h5 = {
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '32px'
};
exports.h5 = h5;
var h6 = {
  fontSize: '22px',
  fontWeight: 500,
  lineHeight: '32px',
  letterSpacing: '0.15px'
};
exports.h6 = h6;
var subtitle1 = {
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 400,
  letterSpacing: '0.15px'
};
exports.subtitle1 = subtitle1;
var subtitle2 = {
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 500,
  letterSpacing: '0.1px'
};
exports.subtitle2 = subtitle2;
var body2 = {
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400,
  letterSpacing: '0.1px'
};
exports.body2 = body2;
var button = {
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 500,
  letterSpacing: '0.1px'
};
exports.button = button;
var caption = {
  fontSize: '12px',
  lineHeight: '20px',
  fontWeight: 400,
  letterSpacing: '0.4px'
};
exports.caption = caption;
var overline = {
  fontSize: '10px',
  lineHeight: '20px',
  fontWeight: 400,
  letterSpacing: '1px'
};
exports.overline = overline;
//# sourceMappingURL=Text.styles.js.map
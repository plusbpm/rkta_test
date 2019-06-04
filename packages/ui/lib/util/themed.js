"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _useProviderContext2 = _interopRequireDefault(require("../Provider/useProviderContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function themed(name, Component) {
  return function (_ref) {
    var css = _ref.css,
        props = _objectWithoutProperties(_ref, ["css"]);

    var _useProviderContext = (0, _useProviderContext2["default"])(),
        theme = _useProviderContext.theme;

    var ownCss = Array.isArray(css) ? css : [css];

    var thunk = function thunk(payload) {
      if (typeof payload === 'function') return thunk(payload(theme, _objectSpread({}, props, {
        css: css
      })));
      return payload;
    };

    var styles = theme[name] || {};
    var nextProps = {
      css: css
    };
    var cssEmotion = [thunk(styles.initialStyle)];
    var keys = Object.keys(props);

    for (var i = 0; i < keys.length; i += 1) {
      var key = keys[i];
      var value = props[key];

      if (key in styles) {
        if (value !== false) cssEmotion.push(thunk(styles[key]));
      } else {
        nextProps[key] = value;
      }
    }

    for (var _i = 0; _i < ownCss.length; _i += 1) {
      cssEmotion.push(thunk(ownCss[_i]));
    }

    return _react["default"].createElement(Component, _extends({}, nextProps, {
      css: cssEmotion
    }));
  };
}

var _default = themed;
exports["default"] = _default;
//# sourceMappingURL=themed.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _room = _interopRequireDefault(require("../images/room-1.jpeg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-height: 60vh;\n  background: url(", ")\n    center/cover no-repeat;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHero = _styledComponents["default"].header(_templateObject(), function (props) {
  return props.img ? props.img : _room["default"];
});

var _default = StyledHero;
exports["default"] = _default;
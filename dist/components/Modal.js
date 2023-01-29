"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _io = require("react-icons/io");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(_ref) {
  var message = _ref.message,
      modalColor = _ref.modalColor,
      btnColor = _ref.btnColor,
      bgColor = _ref.bgColor,
      size = _ref.size,
      corner = _ref.corner,
      justify = _ref.justify,
      open = _ref.open,
      close = _ref.close;

  var modalSize = void 0;
  var btnSize = void 0;
  var padding = void 0;

  switch (size) {
    case "sm":
      modalSize = "30%";
      btnSize = "30px";
      padding = "40px";
      break;
    case "md":
      modalSize = "40%";
      btnSize = "40px";
      padding = "50px";
      break;
    case "lg":
      modalSize = "60%";
      btnSize = "50px";
      padding = "60px";
      break;
    case "fit":
      modalSize = "fit-content";
      btnSize = "30px";
      padding = "40px";
      break;
    default:
      break;
  }

  var modalwindowStyle = {
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    overflow: "auto",
    zIndex: "1",
    padding: "20px",
    boxSizing: "border-box",
    backgroundColor: bgColor,
    textAlign: "center"
  };

  var modalStyle = {
    display: "flex",
    position: "absolute",
    flexDirection: "row",
    justifyContent: justify,
    alignItems: "center",
    backgroundColor: modalColor,
    width: modalSize,
    padding: padding,
    gap: "1rem",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: corner
  };

  var buttonStyle = {
    position: "absolute",
    top: "5px",
    right: "10px",
    padding: "10px",
    fontSize: btnSize,
    color: btnColor
  };

  return open ? _react2.default.createElement(
    "div",
    { style: modalwindowStyle },
    _react2.default.createElement(
      "div",
      { style: modalStyle },
      _react2.default.createElement(_io.IoMdClose, { role: "button", style: buttonStyle, onClick: close }),
      _react2.default.createElement(
        "p",
        null,
        message
      )
    )
  ) : null;
};

Modal.propTypes = {
  bgColor: _propTypes2.default.string,
  modalColor: _propTypes2.default.string,
  btnColor: _propTypes2.default.string,
  corner: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(["sm", "md", "lg", "fit"]),
  justify: _propTypes2.default.oneOf(["center", "left"]),
  message: _propTypes2.default.string,
  open: _propTypes2.default.bool,
  close: _propTypes2.default.func
};

Modal.defaultProps = {
  modalColor: "white",
  bgColor: "rgba(0,0,0,0.25)",
  btnColor: "grey",
  corner: "5px",
  size: "md",
  justify: "center",
  message: "my message",
  open: true,
  close: undefined
};

exports.default = Modal;
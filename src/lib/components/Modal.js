import React from "react";
import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";

const Modal = ({ message, modalColor, btnColor, bgColor, size, corner, justify, open, close }) => {
  let modalSize;
  let btnSize;
  let padding;

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

  const modalwindowStyle = {
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
    textAlign: "center",
  };

  const modalStyle = {
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
    borderRadius: corner,
  };

  const buttonStyle = {
    position: "absolute",
    top: "5px",
    right: "10px",
    padding: "10px",
    fontSize: btnSize,
    color: btnColor,
  };

  return open ? (
    <div style={modalwindowStyle}>
      <div style={modalStyle}>
        <IoMdClose role="button" style={buttonStyle} onClick={close} />
        <p>{message}</p>
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  bgColor: PropTypes.string,
  modalColor: PropTypes.string,
  btnColor: PropTypes.string,
  corner: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "fit"]),
  justify: PropTypes.oneOf(["center", "left"]),
  message: PropTypes.string,
  open: PropTypes.bool,
  close: PropTypes.func,
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
  close: undefined,
};

export default Modal;

import React from "react";
import Modal from "./Modal";

export default {
  title: "Example/Modal",
  component: Modal,
  argTypes: {
    modalColor: { control: "color" },
    bgColor: { control: "color" },
    btnColor: { control: "color" },
  },
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "My modal",
  size: "md",
  justify: "left",
  corner: "0px",
  open: true,
};

export const Round = Template.bind({});
Round.args = {
  message: "My modal",
  size: "md",
  justify: "center",
  corner: "20px",
  open: true,
};

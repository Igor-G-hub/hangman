import React from "react";
import PropTypes from "prop-types";
import { Paragraph } from "./styled";

export const ErrorMessage = ({ text }) => (
  <>
    <Paragraph>{text}</Paragraph>
  </>
);

ErrorMessage.propTypes = {
  text: PropTypes.string,
};

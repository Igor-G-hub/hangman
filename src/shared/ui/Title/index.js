import React from "react";
import PropTypes from "prop-types";
import { Header } from "./styled";

export const Title = ({ text }) => (
  <>
    <Header>{text}</Header>
  </>
);

Title.propTypes = {
  text: PropTypes.string,
};

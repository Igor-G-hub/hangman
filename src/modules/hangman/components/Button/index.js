import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./styled";

export const Button = ({ letter, onClick }) => (
  <ButtonStyled onClick={() => onClick(letter)}>{letter}</ButtonStyled>
);

Button.propTypes = {
  letter: PropTypes.string,
  onClick: PropTypes.func,
};

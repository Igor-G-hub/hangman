import React from "react";
import PropTypes from "prop-types";
import { StyledInput, Label, Container } from "./styled";

export const Input = ({ label, onChange }) => (
  <>
    <Container>
      <Label>{label}</Label>
      <StyledInput onChange={(e) => onChange(e.target.value)} />
    </Container>
  </>
);

Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
};

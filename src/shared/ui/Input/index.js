import React from "react";
import PropTypes from "prop-types";
import { StyledInput, Label, Container } from "./styled";

export const Input = ({ label, onChange, placeholder }) => (
  <>
    <Container>
      <Label>{label}</Label>
      <StyledInput
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </Container>
  </>
);

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

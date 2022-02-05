import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styled";

export const FlexContainer = ({ children, margin, flexDirection }) => (
  <>
    <Container flexDirection={flexDirection} margin={margin}>
      {children}
    </Container>
  </>
);

FlexContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  margin: PropTypes.string,
  flexDirection: PropTypes.string,
};

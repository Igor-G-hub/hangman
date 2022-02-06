import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styled";

export const FlexContainer = ({
  children,
  margin,
  padding,
  flexDirection,
  justifyContent,
  alignItems,
  background,
  borderRadius,
  width,
}) => (
  <>
    <Container
      background={background}
      flexDirection={flexDirection}
      margin={margin}
      padding={padding}
      borderRadius={borderRadius}
      justifyContent={justifyContent}
      alignItems={alignItems}
      width={width}
    >
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
  padding: PropTypes.string,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  background: PropTypes.string,
  width: PropTypes.string,
};

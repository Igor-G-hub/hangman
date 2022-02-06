import React from "react";
import PropTypes from "prop-types";
import { Button } from "./styled";

export const ActionButton = ({ label, margin, onClick, width }) => (
  <>
    <Button onClick={onClick} margin={margin} width={width}>
      {label}
    </Button>
  </>
);

ActionButton.propTypes = {
  label: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
};

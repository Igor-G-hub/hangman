import React from "react";
import PropTypes from "prop-types";
import { Button } from "./styled";

export const ActionButton = ({ label, margin, onClick }) => (
  <>
    <Button onClick={onClick} margin={margin}>
      {label}
    </Button>
  </>
);

ActionButton.propTypes = {
  label: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func,
};

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { LetterStyled, NonLetterStyled } from "./styled";

export const Character = ({ character, isLetter, isShowed }) => (
  <>
    {isLetter && <LetterStyled isShowed={isShowed}>{character}</LetterStyled>}
    {!isLetter && <NonLetterStyled>{character}</NonLetterStyled>}
  </>
);

Character.propTypes = {
  character: PropTypes.string,
  isLetter: PropTypes.bool,
  isShowed: PropTypes.bool,
  chosenLetter: PropTypes.string,
};

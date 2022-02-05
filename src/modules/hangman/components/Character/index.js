import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { LetterStyled, NonLetterStyled } from "./styled";

export const Character = ({ character, isLetter, chosenLetter }) => {
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    if (isLetter) {
      if (chosenLetter === character.toUpperCase()) {
        setIsMatched(true);
      }
    }
  }, [chosenLetter]);

  return (
    <>
      {isLetter && <LetterStyled show={isMatched}>{character}</LetterStyled>}
      {!isLetter && <NonLetterStyled>{character}</NonLetterStyled>}
    </>
  );
};

Character.propTypes = {
  letter: PropTypes.string,
  isLetter: PropTypes.bool,
  chosenLetter: PropTypes.string,
};

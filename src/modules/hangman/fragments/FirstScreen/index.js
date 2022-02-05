import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Input, ActionButton, FlexContainer, ErrorMessage } from "shared/ui";
import { setName } from "modules/hangman/redux";

export const FirstScreen = ({ goNext }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(null);
  const [error, setError] = useState(false);

  const handleOnChange = (inputValue) => {
    setError(false);
    setInput(inputValue);
  };

  const handleClick = () => {
    if (input) {
      dispatch(setName(input));
      goNext();
    } else {
      setError(true);
    }
  };

  return (
    <>
      <FlexContainer>
        <Input label="Insert your name:" onChange={handleOnChange} />
        {error && <ErrorMessage text="Please enter name" />}
        <ActionButton
          label="Submit"
          margin="10px 0 0 0"
          onClick={handleClick}
        />
      </FlexContainer>
    </>
  );
};

FirstScreen.prototypes = {
  goNext: PropTypes.func,
};

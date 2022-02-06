import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  Input,
  ActionButton,
  FlexContainer,
  ErrorMessage,
  Title,
} from "shared/ui";
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
      <FlexContainer
        flexDirection="column"
        alignItems="center"
        padding="30px"
        background="#0000005f"
        borderRadius="25px"
      >
        <FlexContainer padding="0 0 150px 0">
          <Title text="Welcome to hangman game" />
        </FlexContainer>

        <Input
          label="Insert your name:"
          placeholder="Your name"
          onChange={handleOnChange}
        />
        {error && <ErrorMessage text="Please enter name" />}
        <ActionButton
          label="Submit"
          margin="40px 0 0 0"
          width="30%"
          onClick={handleClick}
        />
      </FlexContainer>
    </>
  );
};

FirstScreen.prototypes = {
  goNext: PropTypes.func,
};

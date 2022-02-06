import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  dataSelector,
  errorSelector,
  setError,
  axiosHandlingData,
  nameSelector,
  initialTimeSelector,
  setInitialTime,
} from "modules/hangman/redux";
import {
  alphabet,
  getQuotePath,
  isLetter,
  scoringDataPath,
} from "utilities/const";
import { Button } from "modules/hangman/components";
import { Character } from "modules/hangman/components";
import { ContentContainer, QuoteContainer, ButtonsContainer } from "./styled";
import { setData } from "modules/hangman/redux";
import { useDispatch, useSelector } from "react-redux";
import { ActionButton } from "shared/ui";

export const SecondScreen = ({ goNext }) => {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);
  const name = useSelector(nameSelector);
  const errorCounter = useSelector(errorSelector);
  const initialTime = useSelector(initialTimeSelector);
  const [isMatched, setIsMatched] = useState([]);
  const [quoteArray, setQuoteArray] = useState();
  // const [initialTime, setInitialTime] = useState();
  const [quoteUniqueCharactersArray, setQuoteUniqueCharactersArray] = useState(
    []
  );
  const [message, setMessage] = useState(false);

  console.log("initialTime", initialTime);
  console.log("razlika", new Date().getTime() - initialTime);

  useEffect(() => {
    const callFetchData = async () => {
      const { response, error } = await axiosHandlingData(getQuotePath, {
        type: "GET",
      });
      dispatch(setData(response.data));
      setQuoteArray(response.data.content.split(""));
      dispatch(setInitialTime(new Date().getTime()));
    };
    callFetchData();
  }, []);

  useEffect(() => {
    if (!quoteArray) return;
    const nonDuplicateQuoteArray = quoteArray.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.toUpperCase() === value.toUpperCase())
    );
    const onlyLettersArray = nonDuplicateQuoteArray.filter((item) =>
      isLetter(item)
    );
    const formatQuoteArray = onlyLettersArray.map((item) => item.toUpperCase());
    setQuoteUniqueCharactersArray(formatQuoteArray);
    console.log("formatQuoteArray lengtj", formatQuoteArray.length);
  }, [quoteArray]);

  const handleLetter = async (letter) => {
    let helperIsMatched;
    if (quoteArray.some((item) => item.toUpperCase() === letter)) {
      if (isMatched.some((item) => item === letter)) return;
      setIsMatched([...isMatched, letter]);
      helperIsMatched = [...isMatched, letter];
      if (helperIsMatched.length === quoteUniqueCharactersArray.length) {
        setMessage("You won the game!");
        dispatch(setError(null));
        const quoteId = data._id;
        const lenght = data.length;
        const uniqueCharacters = quoteUniqueCharactersArray.length;
        const userName = name;
        const errors = errorCounter;
        const duration = new Date().getTime() - initialTime;

        await axiosHandlingData(
          scoringDataPath,
          {
            type: "POST",
          },
          {
            quoteId,
            lenght,
            uniqueCharacters,
            userName,
            errors,
            duration,
          }
        );
        setTimeout(() => goNext(), 3000);
      }
    } else {
      dispatch(setError(errorCounter + 1));
    }
  };

  useEffect(() => {
    if (errorCounter >= 6) {
      setMessage("You have lost!");
      setTimeout(() => {
        handleReset();
      }, 3000);
    }
  }, [errorCounter]);

  const handleReset = async () => {
    setMessage(false);
    setIsMatched([]);
    dispatch(setError(null));
    const { response, error } = await axiosHandlingData(getQuotePath, {
      type: "GET",
    });
    dispatch(setData(response.data));
  };

  return (
    <>
      {data && (
        <>
          <ContentContainer>
            <div>{message}</div>
            {errorCounter > 0 && <div>ERRORS: {errorCounter}</div>}
            <QuoteContainer>
              {data.content.split("").map((item, index) => (
                <Character
                  key={index}
                  character={item}
                  isLetter={isLetter(item)}
                  isShowed={isMatched.some(
                    (elem) => elem === item.toUpperCase()
                  )}
                />
              ))}
            </QuoteContainer>
            <ButtonsContainer>
              {alphabet.map((item) => (
                <Button
                  key={item}
                  letter={item}
                  onClick={() => handleLetter(item)}
                />
              ))}
            </ButtonsContainer>
            <ActionButton label="Reset" onClick={handleReset} />
          </ContentContainer>
        </>
      )}
    </>
  );
};

SecondScreen.prototypes = {
  goNext: PropTypes.func,
};

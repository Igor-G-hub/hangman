import React, { useEffect, useState } from "react";
import {
  dataSelector,
  errorSelector,
  setError,
  axiosHandlingData,
} from "modules/hangman/redux";
import { alphabet, getQuotePath, isLetter } from "utilities/const";
import { Button } from "modules/hangman/components";
import { Character } from "modules/hangman/components";
import { ContentContainer, QuoteContainer, ButtonsContainer } from "./styled";
import { setData } from "modules/hangman/redux";
import { useDispatch, useSelector } from "react-redux";
import { ActionButton } from "shared/ui";

export const SecondScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);
  const errorCounter = useSelector(errorSelector);
  const [isMatched, setIsMatched] = useState([]);
  const [quoteArray, setQuoteArray] = useState();

  useEffect(() => {
    const callFetchData = async () => {
      const { response, error } = await axiosHandlingData(getQuotePath, {
        type: "GET",
      });
      dispatch(setData(response.data));
      setQuoteArray(response.data.content.split(""));
    };
    callFetchData();
  }, []);

  const handleLetter = (letter) => {
    if (quoteArray.some((item) => item.toUpperCase() === letter)) {
      if (isMatched.length === 0) {
        setIsMatched([...isMatched, letter]);
        return;
      }
      if (isMatched.some((item) => item === letter)) return;
      setIsMatched([...isMatched, letter]);
    } else {
      dispatch(setError());
    }
  };

  // useEffect(() => {
  //   window.addEventListener("keydown", (e) => {
  //     console.log(e.key);
  //     handleLetter(e.key.toUpperCase());
  //   });
  // }, []);

  const handleReset = async () => {
    setIsMatched([]);
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
            <div>ERRORS: {errorCounter}</div>
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

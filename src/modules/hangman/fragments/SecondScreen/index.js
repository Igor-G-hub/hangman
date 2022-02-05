import React, { useEffect, useState } from "react";
import {
  dataSelector,
  setError,
  setErrors,
  useAxiosHandlingData,
} from "modules/hangman/redux";
import { alphabet, getQuotePath, isLetter } from "utilities/const";
import { Button } from "modules/hangman/components";
import { Character } from "modules/hangman/components";
import { ContentContainer, QuoteContainer, ButtonsContainer } from "./styled";
import { setData } from "modules/hangman/redux";
import { useDispatch, useSelector } from "react-redux";

export const SecondScreen = () => {
  const dispatch = useDispatch();
  const { response, loading, error } = useAxiosHandlingData(getQuotePath, {
    type: "GET",
  });
  const data = useSelector(dataSelector);
  const [letterInput, setLetterInput] = useState(null);
  const [isMatched, setIsMatched] = useState(null);

  useEffect(() => {
    if (response !== null) {
      dispatch(setData(response.data));
    }
  }, [response]);

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      setLetterInput(e.key.toUpperCase());
    });
  }, []);

  useEffect(() => {
    if (!data) return;
    const isMatched = data.content
      .split("")
      .find((item) => item.toUpperCase() === letterInput);
    if (isMatched) {
      setIsMatched(letterInput);
    } else {
      dispatch(setError());
    }
  }, [letterInput]);

  return (
    <>
      {data && (
        <ContentContainer>
          <QuoteContainer>
            {data.content.split("").map((item, index) => (
              <Character
                key={index}
                character={item}
                isLetter={isLetter(item)}
                chosenLetter={letterInput}
              />
            ))}
          </QuoteContainer>
          <ButtonsContainer>
            {alphabet.map((item) => (
              <Button key={item} letter={item} onClick={setLetterInput} />
            ))}
          </ButtonsContainer>
        </ContentContainer>
      )}
    </>
  );
};

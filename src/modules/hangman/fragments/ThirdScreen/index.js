import React, { useEffect, useState } from "react";
import {
  axiosHandlingData,
  highScoresSelector,
  setHighScores,
} from "modules/hangman/redux";
import { getHighScores } from "utilities/const";
import { useDispatch, useSelector } from "react-redux";
import { FlexContainer, Title } from "shared/ui";
import { TableList } from "modules/hangman/components";

export const ThirdScreen = () => {
  const dispatch = useDispatch();
  const highScores = useSelector(highScoresSelector);
  const [listWithScores, setListWithScores] = useState([]);

  useEffect(() => {
    const callFetchData = async () => {
      const { response, error } = await axiosHandlingData(getHighScores, {
        type: "GET",
      });
      dispatch(setHighScores(response.data));
    };
    callFetchData();
  }, []);

  useEffect(() => {
    if (!highScores) return;
    let sortedHighScores = [...highScores];
    sortedHighScores = sortedHighScores.sort((a, b) => {
      if (a.errors < b.errors) return -1;
      if (a.errors > b.errors) return 1;
      if (a.errors === b.errors) {
        if (a.uniqueCharacters > b.uniqueCharacters) return -1;
        if (a.uniqueCharacters < b.uniqueCharacters) return 1;
        if (a.uniqueCharacters === b.uniqueCharacters) {
          if (a.length > b.length) return -1;
          if (a.length < b.length) return 1;
          if (a.length === b.length) {
            if (a.duration < b.duration) return -1;
            if (a.duration > b.duration) return 1;
            if (a.duration === b.duration) return 0;
          }
        }
      }
    });
    const arrayWithScoresInList = sortedHighScores.map((item) => ({
      ...item,
      score: (100 / (1 + item.errors)).toFixed(2),
    }));
    setListWithScores(arrayWithScoresInList);
  }, [highScores]);

  return (
    <>
      {listWithScores && (
        <FlexContainer
          flexDirection="column"
          alignItems="center"
          background="#0000009f"
          padding="70px 50px"
        >
          <Title text="High score list" />
          <TableList header={["Name", "Score"]} data={listWithScores} />
        </FlexContainer>
      )}
    </>
  );
};

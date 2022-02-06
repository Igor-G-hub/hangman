import styled from "styled-components";

export const LetterStyled = styled.div`
  padding: 15px 15px 5px 15px;
  margin: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  font-size: 18px;
  color: ${({ isShowed }) =>
    isShowed ? `${({ theme }) => theme.colors.light}` : "transparent"};
`;

export const NonLetterStyled = styled.div`
  padding: 15px 15px 5px 15px;
  margin: 10px;
  font-size: 18px;
`;

import styled from "styled-components";

export const LetterStyled = styled.div`
  padding: 15px 15px 5px 15px;
  margin: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  font-size: 18px;
  color: ${({ show }) => show || "transparent"};
`;

export const NonLetterStyled = styled.div`
  padding: 15px 15px 5px 15px;
  margin: 10px;
  font-size: 18px;
`;

import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 10px;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark}9f;
  }
`;

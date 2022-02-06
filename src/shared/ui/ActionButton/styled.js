import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  margin: ${({ margin }) => margin && margin};
  font-size: 18px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  width: ${({ width }) => width && width};

  &:hover {
    transform: scaleY(1.1);
    transform: scaleX(1.1);
    transition: 0.2s;
  }
`;

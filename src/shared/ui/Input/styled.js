import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  padding: 10px 15px;
  margin-top: 5px;
  border-radius: 10px;

  &::placehoder {
    font-size: 16px;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.light};
`;

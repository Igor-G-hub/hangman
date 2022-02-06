import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ flexDirection }) => flexDirection && flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  margin: ${({ margin }) => margin && margin};
  padding: ${({ padding }) => padding && padding};
  background-color: ${({ background }) => background && background};
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  width: ${({ width }) => width && width};
`;

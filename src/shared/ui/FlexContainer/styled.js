import styled from "styled-components";

export const Container = styled.div`
  flex-direction: ${({ flexDirection }) => flexDirection && flexDirection};
`;

import { theme } from "shared/theme";
import styled from "styled-components";

export const Header = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.light};
`;

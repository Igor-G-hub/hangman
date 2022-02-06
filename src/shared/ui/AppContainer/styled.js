import styled from "styled-components";
import bgImage from "shared/assets/images/wp3158676-beautifull-hd-wallpaper-free-dawonlod.jpg";

export const StyledContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bgImage});
  object-position: cover;
`;

import React from "react";
import { ScreenManager } from "./modules/hangman";
import { AppContainer } from "./shared/ui";

const App = () => (
  <>
    <AppContainer>
      <ScreenManager />
    </AppContainer>
  </>
);

export default App;

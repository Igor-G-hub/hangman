import React, { useState } from "react";
import { FirstScreen } from "../FirstScreen";
import { SecondScreen } from "../SecondScreen";
import { ThirdScreen } from "../ThirdScreen";

export const ScreenManager = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => {
    setCurrentStep(() => currentStep + 1);
  };

  return (
    <>
      {currentStep === 0 && <FirstScreen goNext={goNext} />}
      {currentStep === 1 && <SecondScreen goNext={goNext} />}
      {currentStep === 2 && <ThirdScreen goNext={goNext} />}
    </>
  );
};

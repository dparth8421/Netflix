import React from "react";
import GptSearchBar from "./gptSearchBar";
import GptSuggestion from "./gptSuggestion";
import { BACKGROUND_IMG } from "./constants/constants";

const GptPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND_IMG} alt="Background_logo" />
      </div>
      <GptSearchBar />
      <GptSuggestion />
    </div>
  );
};

export default GptPage;

import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import OpenAI from "openai";
import Openai from "../utils/Openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  console.log(langKey);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const Query =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // make an api call to get movie results
    const gptResults = await Openai.chat.completions.create({
      messages: [{ role: "user", content: Query }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults);
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

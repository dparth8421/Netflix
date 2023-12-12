import React from "react";
import Header from "./Header";

import MainContainer from "./MainContainer";
import usePopularMovies from "./hooks/usePopularMovies";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import GptPage from "./GptPage";
import { useSelector } from "react-redux";

// import usePopularMovies from "./hooks/usePopularMovies";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  // used custom hook
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* 
        UI LLD
        Main Container
          - background Video
          - video title
        secondary container
          - MovieList * n
          - cards * n     

      */}
    </div>
  );
};

export default Browse;

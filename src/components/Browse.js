import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // used custom hook
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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

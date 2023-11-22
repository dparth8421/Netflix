import React from "react";
import Header from "./Header";

import MainContainer from "./MainContainer";
import usePopularMovies from "./hooks/usePopularMovies";
import SecondaryContainer from "./secondaryContainer";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";

// import usePopularMovies from "./hooks/usePopularMovies";

const Browse = () => {
  // used custom hook
  useNowPlayingMovies();
  usePopularMovies();
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

import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";

const Browse = () => {
  // used custom hook
  useNowPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;

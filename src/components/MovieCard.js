import React from "react";
import { IMG_URL } from "./constants/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie_Card" src={IMG_URL + posterPath} />
    </div>
  );
};

export default MovieCard;

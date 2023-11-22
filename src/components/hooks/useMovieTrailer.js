import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { addTrailerVideo } from "../../utils/Redux/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json);

    const filter_Data = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filter_Data.length ? filter_Data[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;

import React from "react";
import { getTrendingMovie } from "@/lib/tmdb/tmdbService";
import { Movie } from "@/lib/types";
import MovieList from "@/app/components/MovieList/MovieList";

const TrendingMovieList = async () => {
  const trendingMovies = await getTrendingMovie();

  return (
    <div className=" w-screen border border-red">
      {!trendingMovies && <div>API request failed</div>}
      {trendingMovies && <MovieList movies={trendingMovies} />}
    </div>
  );
};

export default TrendingMovieList;

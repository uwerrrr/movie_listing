import React from "react";
import { Movie } from "@/lib/types";
import MovieCard from "@/app/components/MovieCard/MovieCard";

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className="flex flex-wrap gap-4 w-full justify-center">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

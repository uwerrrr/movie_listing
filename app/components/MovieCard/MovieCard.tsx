import React from "react";
import { Movie } from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface MovieCardProps {
  movie: Movie;
}
const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="rounded max-w-sm flex flex-col p-3 bg-slate-500 gap-4 justify-evenly">
      <p>{movie.title}</p>
      <article>{movie.overview}</article>

      <p>Release date: {formatDate(movie.release_date)}</p>
      <p>{movie.vote_average}/10</p>
    </div>
  );
};

export default MovieCard;

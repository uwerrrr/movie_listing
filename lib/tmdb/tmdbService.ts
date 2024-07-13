const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;
import { Movie } from "@/lib/types";

export const getTrendingMovie = async (): Promise<Movie[] | undefined> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
      options
    );
    if (!response.ok) throw new Error("API request failed");
    const resJson = await response.json();
    console.log("getTrendingMovie response: ", resJson);
    return resJson.results;
  } catch (error) {
    console.error(error);
  }
};

import TrendingMovieList from "@/app/components/TrendingMovieList/TrendingMovieList";
import { Suspense } from "react";
export default function Home() {
  return (
    <main className="">
      <h1>Trending Movie List</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TrendingMovieList />
      </Suspense>
    </main>
  );
}

import React from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function Search({ api_path }) {
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(api_path, queryTerm);

  useEffect(()=>{
    document.title=`Search for the ${queryTerm} / cinemate`
  })

  return (
    <main>
      <section className="py-7 my-7">
        <p className="text-xl dark:text-slate-300	mb-5">
          {movies.length === 0
            ? `no movies found for ${queryTerm}`
            : `Search Found for "${queryTerm}"`}
        </p>
        </section>
        <section className="py-7">
          <div className="flex justify-between flex-wrap mb-5">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              poster={movie.poster_path}
              overview={movie.overview}
              title={movie.original_title}
              id={movie.id}
            />
          ))}
          </div>
        </section>
      
    </main>
  );
}

import { useEffect } from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

export default function Movielist({ api_path,title }) {
  const { data: movies } = useFetch(api_path);

  useEffect(()=>{
    document.title=`${title} / cinemate`
  })

  return (
    <main>
      <section className="py-7 my-7">
        <div className="flex justify-start flex-wrap gap-10  mb-5 sm:justify-center ">
          {}
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

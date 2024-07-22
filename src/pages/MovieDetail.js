import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MovieDetail() {
  const [data, setData] = useState({});
  const params = useParams();

  const image = `https://image.tmdb.org/t/p/original/${data.poster_path}`;

  useEffect(() => {
    async function fetchMoviesdetails() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=58e2a74ee1780e0ac7e3c3080157f030`
      );
      const json = await response.json();

      setData(json);
    }
    fetchMoviesdetails();
  });

  useEffect(()=>{
    document.title=`${data.title} / cinemate`
  })
  return (
    <main>
      <section className="flex justify-around flex-wrap gap-7 py-9 my-7 max-w-l">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={data.title} />
        </div>
        <div className="max-w-3xl text-gray-950 dark:text-slate-50">
          <h1 className="text-4xl text-slate-600 font-bold my-4 dark:text-slate-300 text-center lg:text-left">
            {data.title}
          </h1>
          <p className="text-xl mb-5 font text-slate-700 dark:text-slate-300">
            {data.overview}
          </p>
          {data.genres
            ? data.genres.map((genre, index) => (
                <span
                  className="border-2 mr-5 mb-2 p-2 rounded text-slate-600 dark:border-slate-500 dark:text-slate-300"
                  key={index}
                >
                  {genre.name}
                </span>
              ))
            : ""}

          <div className="flex items-center my-5 py-2">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-md font-medium text-gray-600 dark:text-white">
              {data.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-md font-medium text-gray-600  dark:text-white">
              {data.vote_count} reviews
            </span>
          </div>
          <p className="my-4">
            <span className="mr-2 font-bold text-slate-600 dark:text-slate-300 text-2xl mb-5">
              Runtime :
            </span>
            <span className="text-xl dark:text-slate-300 text-slate-700">{data.runtime}</span>
          </p>
          <p>
            <span className="mr-2 font-bold text-slate-600 dark:text-slate-300 text-2xl mb-5">
              budget :
            </span>
            <span className="text-xl dark:text-slate-300 text-slate-700">{data.budget}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold text-slate-600 dark:text-slate-300 text-2xl mb-5">
              Revenue :
            </span>
            <span className="text-xl dark:text-slate-300 text-slate-700">{data.revenue}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold text-slate-600 dark:text-slate-300 text-2xl mb-5">
              Release date :
            </span>
            <span className="text-xl dark:text-slate-300 text-slate-700">{data.release_date}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold text-slate-600 dark:text-slate-300 text-2xl mb-5">
              imdb code :
            </span>
            <Link to={`https://www.imdb.com/title/${data.imdb_id}/`} target="_blank" rel="noreferrer" className="text-slate-700 text-xl dark:text-slate-300">{data.imdb_id}</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

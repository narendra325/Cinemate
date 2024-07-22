import { Routes, Route } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";
import Movielist from "../pages/Movielist";
import Search from "../pages/Search";
import PagenotFound from "../pages/PagenotFound";

import React from "react";

const Allroutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route
          path=""
          element={<Movielist api_path="movie/now_playing" title="home" />}
        />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route
          path="movies/popular"
          element={<Movielist api_path="movie/popular" title="Popular" />}
        />
        <Route
          path="movies/top"
          element={<Movielist api_path="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="movies/Upcoming"
          element={<Movielist api_path="movie/upcoming" title="Upcoming" />}
        />
        <Route path="Search" element={<Search api_path="search/movie" />} />
        <Route path="*" element={<PagenotFound title="Page not found" />} />
      </Routes>
    </div>
  );
};

export default Allroutes;

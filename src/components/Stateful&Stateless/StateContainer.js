import React, { useState } from "react";
import Header from "./Header";
import MovieList from "./MovieList";

function StateContainer() {
  const initialState = {
    movies: [
      { uniqueID: "ab1", title: "Rick and Morty", rating: 9.3 },
      { uniqueID: "ab2", title: "Stranger Things", rating: 8.8 },
      { uniqueID: "ab3", title: "Insterstellar", rating: 8.6 },
    ],
    app: { title: "Netflix app", profileMenuData: "Profile Menu data" },
  };
  const [data, setData] = useState(initialState);
  return (
    <div>
      <Header app={data.app}></Header>
      <MovieList movies={data.movies}></MovieList>
    </div>
  );
}

export default StateContainer;

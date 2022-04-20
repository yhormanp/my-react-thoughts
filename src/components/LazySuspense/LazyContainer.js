import React, { Suspense, Lazy } from "react";
import ArtistsA from "./ArtistsA";

const baseData = [
  {
    id: "1",
    name: "Davido",
    country: "Nigeria",
    genre: "Afro-Pop",
    albums: "2",
  },
  {
    id: "2",
    name: "AKA",
    country: "South-Africa",
    genre: "Hip-Hop",
    albums: "4",
  },
  {
    id: "3",
    name: "Seyi Shay",
    country: "Nigeria",
    genre: "R&B",
    albums: "2",
  },
  {
    id: "4",
    name: "Sauti Sol",
    country: "Kenya",
    genre: "Soul",
    albums: "3",
  },
];

const LazyArtists = React.lazy(() => import("./ArtistsB"));

function LazyContainer() {
  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '48%'}}>
        <h2> Artists without lazy loading </h2>
        <ArtistsA artistsList={baseData} />
      </div>
      <div>
        <h2> Artists With lazy loading </h2>
        <Suspense fallback={<h1>Still Loading ...</h1>}>
          <LazyArtists artistsList={baseData} />
        </Suspense>
      </div>
    </div>
  );
}

export default LazyContainer;

const ArtistsB = ({ artistsList }) => (
    <>
      <h1>MTV Base Headline Artists 2019</h1>
  
      {artistsList.map((artist) => (
        <div key={artist.id}>
          <h2>{artist.name}</h2>
          <p> genre: {artist.genre}</p>
          <p> Albums Released: {artist.albums}</p>
        </div>
      ))}
    </>
  );
  
  export default ArtistsB;
  
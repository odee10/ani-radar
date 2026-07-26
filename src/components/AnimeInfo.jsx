function AnimeInfo({ anime }) {
  const season = anime.season.charAt(0).toUpperCase() + anime.season.slice(1);

  return (
    <div className="flex flex-col sm:items-center gap-6 sm:gap-4 p-10">
      <div className="p-4 sm:w-full sm:max-w-198 border border-white/40 rounded-xl bg-zinc-800">
        <h1 className="text-xl font-bold text-red-400">Synopsis</h1>
        <h2>{anime.synopsis}</h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 sm:w-full sm:max-w-198">
        <div className="p-4 sm:w-full sm:min-w-3/5 sm:max-w-100 border border-white/40 rounded-xl bg-zinc-800">
          <h1 className="text-xl font-bold text-red-400">Information</h1>
          <h2>Type: {anime.type}</h2>
          <h2>Episodes: {anime.episodes}</h2>
          <h2>Aired: {anime.aired.string}</h2>
          <h2>
            Premiered: {season} {anime.year}
          </h2>
          <h2>Broadcasts: {anime.broadcast.string}</h2>
          <ul>
            Producers:{" "}
            {anime.producers.map((producer) => (
              <li className="ml-8 list-disc" key={producer.mal_id}>
                {producer.name}
              </li>
            ))}
          </ul>
          <h2>Source: {anime.source}</h2>
          <ul>
            Themes:{" "}
            {anime.themes.map((theme) => (
              <li className="ml-8 list-disc" key={theme.mal_id}>
                {theme.name}
              </li>
            ))}
          </ul>
          <h2>Duration: {anime.duration}</h2>
          <h2>Rating: {anime.rating}</h2>
        </div>

        <div className="p-4 sm:w-full sm:max-h-50 border border-white/40 rounded-xl bg-zinc-800">
          <h1 className="text-xl font-bold text-red-400">Statistics</h1>
          <h2>Score: {anime.score}</h2>
          <h2>
            Rank: {anime.rank} (scored by {anime.scored_by.toLocaleString()})
          </h2>
          <h2>Popularity: #{anime.popularity.toLocaleString()}</h2>
          <h2>Members: {anime.members.toLocaleString()}</h2>
          <h2>Favorites: {anime.favorites.toLocaleString()}</h2>
        </div>
      </div>
    </div>
  );
}
export default AnimeInfo;
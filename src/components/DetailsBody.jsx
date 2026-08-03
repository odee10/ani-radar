function DetailsBody({ anime }) {
  const {
    synopsis,
    type,
    episodes,
    aired,
    season,
    year,
    broadcast,
    source,
    duration,
    rating,
    score,
    rank,
    scored_by,
    popularity,
    members,
    favorites,
    producers = [],
    themes = [],
    trailer = {},
  } = anime;

  const formattedSeason = season
    ? season.charAt(0).toUpperCase() + season.slice(1)
    : "TBA";

  return (
    <div className="flex flex-col sm:items-center gap-6 sm:gap-5 p-4 sm:p-10">
      <div className="p-4 sm:w-full sm:max-w-198 rounded-xl bg-zinc-800/50">
        <h1 className="text-xl font-bold text-lime-400">Synopsis</h1>
        <h2>{synopsis ?? "N/A"}</h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 sm:w-full sm:max-w-198">
        <div className="p-4 sm:w-full sm:min-w-3/5 sm:max-w-100 rounded-xl bg-zinc-800/50">
          <h1 className="text-xl font-bold text-lime-400">Information</h1>
          <h2>Type: {type ?? "Unknown"}</h2>
          <h2>Episodes: {episodes ?? "Unknown"}</h2>
          <h2>Aired: {aired?.string ?? "TBA"}</h2>
          <h2>
            Premiered: {formattedSeason} {year}
          </h2>
          <h2>Broadcasts: {broadcast?.string ?? "Unknown"}</h2>
          <ul>
            Producers:{" "}
            {producers.map((producer) => (
              <li className="ml-8 list-disc" key={producer.mal_id}>
                {producer.name}
              </li>
            ))}
          </ul>
          <h2>Source: {source ?? "Unknown"}</h2>
          <ul>
            Themes:{" "}
            {themes.map((theme) => (
              <li className="ml-8 list-disc" key={theme.mal_id}>
                {theme.name}
              </li>
            ))}
          </ul>
          <h2>Duration: {duration ?? "Unknown"}</h2>
          <h2>Rating: {rating ?? "Unknown"}</h2>
        </div>

        <div className="p-4 sm:w-full sm:max-h-50 rounded-xl bg-zinc-800/50">
          <h1 className="text-xl font-bold text-lime-400">Statistics</h1>
          <h2>Score: {score ?? "N/A"}</h2>
          <h2>
            Rank: {rank ?? "N/A"}{" "}
            {!rank ? "" : `(scored by ${scored_by?.toLocaleString()} users)`}
          </h2>
          <h2>Popularity: {popularity?.toLocaleString() ?? "Unknown"}</h2>
          <h2>Members: {members?.toLocaleString() ?? "Unknown"}</h2>
          <h2>Favorites: {favorites?.toLocaleString() ?? "Unknown"}</h2>
        </div>
      </div>
    </div>
  );
}
export default DetailsBody;
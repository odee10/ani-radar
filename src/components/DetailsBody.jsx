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
    streaming = [],
  } = anime;

  const formattedSeason = season
    ? season.charAt(0).toUpperCase() + season.slice(1)
    : "TBA";

  return (
    <div className="flex flex-col sm:items-center gap-6 sm:gap-5 p-4 sm:p-10 mb-4 md:mb-8">
      <div className="p-4 sm:w-full sm:max-w-198 max-h-60 rounded-xl bg-zinc-800/50 overflow-scroll">
        <h1 className="text-xl font-bold text-lime-400">Synopsis</h1>
        <h2>{synopsis ?? "N/A"}</h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 sm:w-full sm:max-w-198 overflow-hidden">
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

        <div className="p-4 sm:w-full sm:max-h-50 rounded-xl bg-zinc-800/50 overflow-hidden">
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

      <div className="p-4 w-full max-w-200 rounded-xl bg-zinc-800/50 overflow-hidden">
        <h1 className="mb-2 text-xl font-bold text-lime-400">Trailer</h1>
        {!trailer.youtube_id ? (
          <div className="grid place-items-center p-4 rounded-xl bg-zinc-800 aspect-video">
            <p className="text-lg sm:text-xl font-medium sm:font-semibold text-white/30">
              Trailer unavailable
            </p>
          </div>
        ) : (
          <iframe
            className="w-full min-w-20 rounded-lg aspect-video"
            src={`https://www.youtube.com/embed/${trailer.youtube_id}?playsinline=1`}
            title={trailer?.title}
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className="p-4 w-full max-w-200 rounded-xl bg-zinc-800/50 overflow-hidden">
        <h1 className="mb-2 text-xl font-bold text-lime-400">
          Streaming Platforms
        </h1>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          {streaming.map((platform) => (
            <a className="w-max text-base font-normal sm:font-medium text-blue-100 hover:underline " href={platform?.url} key={platform.name}>{platform?.name}</a>
          ))}
        </div>
        <p className="mt-4 text-red-400">* Streaming varies by region</p>
      </div>
    </div>
  );
}
export default DetailsBody;

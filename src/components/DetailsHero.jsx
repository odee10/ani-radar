import { Link } from "react-router";
import placeholder from "../assets/placeholder.png";

function DetailsHero({ anime }) {
  const {
    title,
    title_english,
    year,
    status,
    season,
    images,
    genres = [],
    studios = [],
  } = anime;

  const formattedSeason = season
    ? season.charAt(0).toUpperCase() + season.slice(1)
    : "TBA";

  console.log(anime);

  return (
    <div className="flex flex-col items-center">
      <div className="flex px-4 pt-4 pb-6 w-full max-w-220">
        <Link
          className="px-4 py-2 text-sm rounded-lg bg-white/5 hover:bg-white/10"
          to={"/"}
        >
          Back
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-4 sm:px-10">
        <img
          className="max-w-50 sm:max-w-60 rounded-xl"
          src={images?.webp?.large_image_url ?? placeholder}
          alt={title_english ?? title ?? "Anime Card Image"}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = placeholder;
          }}
        />

        <div className="flex flex-col items-center gap-4 sm:max-w-135 text-center">
          <h1 className="px-2 text-xl sm:text-2xl font-semibold">
            {title_english ?? title ?? "Untitled"}
          </h1>
          <h2 className="px-2 text-sm sm:text-lg text-white/60">
            {title ?? "Untitled"}
          </h2>

          <div className="flex justify-center flex-wrap gap-2 sm:min-w-60">
            {genres.map((genre) => (
              <div
                className="px-3 py-1 text-sm border border-white/10 rounded-full bg-zinc-800"
                key={genre.mal_id}
              >
                {genre.name}
              </div>
            ))}
          </div>

          <div>
            <p className="text-sm sm:text-base text-white/60">
              {formattedSeason} {year} • {status ?? "Unknown"} •{" "}
              {studios[0]?.name ?? "Unknown Studio"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsHero;
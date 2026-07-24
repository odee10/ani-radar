import { Link } from "react-router";

function DetailsHero({ anime }) {
  const season = anime.season.charAt(0).toUpperCase() + anime.season.slice(1);
  console.log(anime);

  return (
    <div className="">
      <div className="flex px-4 pt-4 pb-6">
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
          src={anime.images.webp.large_image_url}
          alt={anime.title_english}
        />

        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-xl sm:text-2xl font-semibold">
            {anime.title_english}
          </h1>
          <h2 className="text-sm sm:text-lg text-white/60">{anime.title}</h2>

          <div className="flex justify-center flex-wrap gap-2 sm:min-w-60">
            {anime.genres.map((genre) => (
              <div
                className="px-3 py-1 text-sm border border-white/30 rounded-full bg-zinc-800"
                key={genre.mal_id}
              >
                {genre.name}
              </div>
            ))}
          </div>

          <div>
            <p className="text-sm sm:text-base text-white/60">
              {season} {anime.year} • {anime.status} •{" "}
              {anime.studios[0].name}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsHero;
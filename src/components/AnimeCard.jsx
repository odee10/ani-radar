import { Link } from "react-router";

function AnimeCard({anime}){
  console.log(anime);

  var tvIcon;

  if(anime.type == "TV"){
    tvIcon = "bg-violet-600";
  }
  else{
    tvIcon = "bg-blue-600";
  }

  return(
    <Link to={`/details/${anime.mal_id}`}>
      <div className="relative rounded-xl bg-neutral-800 group drop-shadow-lg/30 drop-shadow-black overflow-hidden">
        <div className="min-h-10 overflow-hidden">
          <img className="w-full max-h-72 object-cover group-hover:scale-105 duration-600" src={anime.images.webp.large_image_url} alt={anime.title} />
          <div className={`absolute top-3 right-3 px-2 rounded-md ${tvIcon} opacity-80`}>
            <h3>{anime.type}</h3>
          </div>
        </div>
        <div className="p-4 min-h-15 text-base font-medium">
          <h2 className="text-sm truncate max-w-40">{anime.title_english}</h2>
          <p className="pt-1 text-sm text-white/30">
            {anime.aired.string.slice(0,5)}, {anime.aired.prop.from.year}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default AnimeCard

// fix the date display so it doesn't break if the format of strings is different
// Probably use season, day, and month instead
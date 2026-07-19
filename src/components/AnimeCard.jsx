import { Link } from "react-router";

function AnimeCard({anime}){
  // console.log(anime);

  var tvIcon;

  if(anime.type == "TV"){
    tvIcon = "bg-violet-600";
  }
  else{
    tvIcon = "bg-blue-600";
  }

  return(
    <Link to={`/details/${anime.mal_id}`}>
      <div className="relative mb-5 max-w-60 rounded-xl bg-neutral-800 overflow-hidden">
        <div className="min-h-40 overflow-hidden">
          <img className="w-full max-h-72 object-cover hover:scale-105 duration-500" src={anime.images.webp.large_image_url} alt={anime.title} />
          <div className={`absolute top-3 right-3 px-2 rounded-md ${tvIcon} opacity-80`}>
            <h3>{anime.type}</h3>
          </div>
        </div>
        <div className="p-4 text-base font-medium ">
          <h2 className="text-sm">{anime.title}</h2>
          <p className="pt-1 text-sm text-white/30">
            {anime.aired.string.slice(0,12)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default AnimeCard
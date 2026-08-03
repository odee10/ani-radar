import { Link } from "react-router";
import placeholder from "../assets/placeholder.png";

function AnimeCard({ anime }) {
  const { mal_id, images, title_english, title, type, aired } = anime;
  let tvIcon;

  if (type == "TV") {
    tvIcon = "bg-violet-600";
  } else {
    tvIcon = "bg-blue-600";
  }

  return (
    <Link to={`/details/${mal_id}`}>
      <div className="relative rounded-xl bg-neutral-800 group drop-shadow-lg/30 drop-shadow-black overflow-hidden">
        <div className="min-h-10 overflow-hidden">
          <img
            className="w-full h-72 object-cover group-hover:scale-105 duration-600"
            src={images?.webp?.large_image_url ?? placeholder}
            alt={title_english ?? title ?? "Anime Card Image"}
          />
          <div
            className={`absolute top-3 right-3 px-2 rounded-md ${tvIcon} opacity-80`}
          >
            <h3>{type}</h3>
          </div>
        </div>
        <div className="p-4 min-h-15 text-base font-medium">
          <h2 className="text-sm truncate max-w-40">
            {!title_english ? "Untitled" : title_english}
          </h2>
          <p className="pt-1 text-sm text-white/30">
            {aired?.string.slice(0, 5)}, {aired?.prop?.from?.year}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default AnimeCard;
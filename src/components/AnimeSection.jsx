import { useEffect, useState } from "react";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import AnimeCard from "./AnimeCard";

function AnimeSection() {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v4/seasons/now?page=1",
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setAnimeList(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredList = animeList.filter(
    (anime, index, self) =>
      index === self.findIndex((a) => a.mal_id === anime.mal_id),
  );

  return (
    <div className="flex flex-col items-center px-4 py-8 overflow-hidden">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-200">
        <h1 className="col-span-2 sm:col-span-3 mb-4 text-2xl text-lime-400 font-black capitalize">
          {filteredList[0]?.season} {filteredList[0]?.year}
        </h1>
        {isLoading
          ? [...Array(6)].map((_, index) => <AnimeCardSkeleton key={index} />)
          : filteredList.map((anime, index) => (
              <AnimeCard key={`${anime.mal_id}-${index}`} anime={anime} />
            ))}
      </div>
    </div>
  );
}

export default AnimeSection;

// remember to make an AnimeSectionSkeleton for this component
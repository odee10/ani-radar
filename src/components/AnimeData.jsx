import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";

function AnimeData() {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.jikan.moe/v4/seasons/now");

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
    <div>
      {isLoading
        ? [...Array(6)].map((_, index) => <AnimeCardSkeleton key={index} />)
        : filteredList
            .slice(0, 10)
            .map((anime, index) => (
              <AnimeCard key={`${anime.mal_id}-${index}`} anime={anime} />
            ))}
    </div>
  );
}

export default AnimeData;

// animeList.slice(0, 5)).map(...) to limit the amount of objects rendered
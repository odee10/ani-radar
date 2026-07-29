import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";

function AnimeData() {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // When adding the "upcoming season" section you will need to make this reusable
        // Probably just need to have a parameter that controls where oyu fetch the information from
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
    <>
      {isLoading
        ? [...Array(6)].map((_, index) => <AnimeCardSkeleton key={index} />)
        : filteredList
            .slice(0, 6)
            .map((anime, index) => (
              <AnimeCard key={`${anime.mal_id}-${index}`} anime={anime} />
            ))}
  </>
  );
}

export default AnimeData;

// animeList.slice(0, 5)).map(...) to limit the amount of objects rendered
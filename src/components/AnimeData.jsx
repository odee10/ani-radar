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

  return (
    <div>
      {isLoading
        ? [...Array(6)].map((_, index) => <AnimeCardSkeleton key={index} />)
        : animeList
            .slice(0, 6)
            .map((anime, index) => (
              <AnimeCard key={`${anime.mal_id}-${index}`} anime={anime} />
            ))}
    </div>
  );

  // return(
  //   <div>
  //     {animeList.slice(0,6).map((anime, index) => (
  //       <AnimeCard key={`${anime.mal_id}-${index}`} anime={anime} />
  //     ))}
  //   </div>
  // );
}

export default AnimeData;

// animeList.slice(0, 5)).map(...) to limit the amount of objects rendered

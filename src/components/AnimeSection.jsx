import { useEffect, useState } from "react";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import AnimeCard from "./AnimeCard";

function AnimeSection() {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (page === 1) {
        setIsLoading(true);
      } else {
        setIsLoadingMore(true);
      }

      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/seasons/now?page=${page}`,
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setAnimeList((previous) => [...previous, ...data.data]);
        setHasNextPage(data.pagination.has_next_page);
      } catch (error) {
        console.error(error);
        setError("Unable to load more anime. Please try gain.");
      } finally {
        if (page === 1) {
          setIsLoading(false);
        } else {
          setIsLoadingMore(false);
        }
      }
    }

    fetchData();
  }, [page]);

  function handleLoadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  const filteredList = animeList.filter(
    (anime, index, self) =>
      index === self.findIndex((a) => a.mal_id === anime.mal_id),
  );

  return (
    <div className="flex flex-col items-center gap-6 px-4 py-8 overflow-hidden">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-120 sm:max-w-170">
        <h1 className="col-span-2 sm:col-span-3 mb-4 text-2xl text-lime-400 font-black capitalize">
          {filteredList[0]?.season} {filteredList[0]?.year}
        </h1>
        {isLoading
          ? [...Array(6)].map((_, index) => <AnimeCardSkeleton key={index} />)
          : filteredList.map((anime, index) => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
      </div>
      {hasNextPage ? (
        <button
          className={`px-6 py-2 rounded-xl bg-white/5 
            ${
              isLoadingMore
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-white/10 cursor-pointer"
            }`}
          type="button"
          onClick={handleLoadMore}
          disabled={isLoadingMore}
        >
          {isLoadingMore ? "Loading..." : "Load more"}
        </button>
      ) : null}
    </div>
  );
}

export default AnimeSection;

// https://api.tenrai.org/v1/seasons/now?sfw=true&page=${page}
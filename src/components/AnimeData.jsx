import { useEffect, useState } from "react"
import AnimeCard from "./AnimeCard";

function AnimeData(){
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    async function fetchData(){
      try{
        const response = await fetch("https://api.jikan.moe/v4/seasons/now");

        if(!response.ok){
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setAnimeList(data.data);
      }
      catch(error){
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return(
    <div>
      {animeList.slice(0,6).map((anime, index) => (
        <AnimeCard key={`${anime.mal_id}-${index}`} anime={anime} />
      ))}
    </div>
  );  
}

export default AnimeData

// animeList.slice(0, 5)).map(...) to limit the amount of objects rendered
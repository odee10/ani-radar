import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Details() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try{
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);

        if(!response.ok){
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setAnime(data.data);
      }
      catch(error){
        console.error(error);
      }
    };
    
    fetchData();
  }, [id]);

  if(!anime){
    return <h1>Loading...</h1>
  }
  
  return(
    <div className="w-screen h-dvh">
        <h1>{anime.title}</h1>
    </div>
  );
}

export default Details
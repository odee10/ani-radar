import AnimeCard from "./components/AnimeCard";
import AnimeData from "./components/AnimeData";


function App() {
  const anime1 = {
    "images": {
      "large_image_url": "https://cdn.myanimelist.net/images/anime/1917/158371l.webp",
      "image_url": "https://cdn.myanimelist.net/images/anime/1917/158371.jpg",  
    },
    "title": "Youjo Senki II",
    "title_english": "Saga of Tanya the Evil II",
    "title_japanese": "幼女戦記 II",
    "trailed_url": "https://www.youtube-nocookie.com/embed/3-Cj3dXwQWI?enablejsapi=1&wmode=opaque&autoplay=1",
    "year": 2026,
    "aired": "Jul 8, 2026 to ?",
    "genres": {
      "mal_id": 1,
      "name": "Action",
      "type": "anime",
      "url": "https://myanimelist.net/anime/genre/1/Action",
    },
    rating: "R - 17+ (violence & profanity)",
    season: "summer",
    source: "Light novel",
    status: "Not yet aired",
    synopsis: "Second season of Youjo Senki.",
  }

  return(
    <>
      <AnimeCard key="231123" anime={anime1} />
    </>
  );
}

export default App
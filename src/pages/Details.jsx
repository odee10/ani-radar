import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailsSkeleton from "./DetailsSkeleton";
import DetailsHero from "../components/DetailsHero";
import DetailsBody from "../components/DetailsBody";
import Footer from "../components/Footer";

function Details() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.tenrai.org/v1/anime/${id}/full`,
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setAnime(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div>
      {!anime ? (
        <DetailsSkeleton />
      ) : (
        <div className="w-screen h-dvh">
          <DetailsHero anime={anime} />
          <DetailsBody anime={anime} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Details;
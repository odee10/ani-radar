import AnimeInfoSkeleton from "../components/AnimeInfoSkeleton";
import DetailsHeroSkeleton from "../components/DetailsHeroSkeleton";

function DetailsSkeleton() {
  return (
    <div className="w-screen h-dvh animate-pulse">
      <DetailsHeroSkeleton />
      <AnimeInfoSkeleton />
    </div>
  );
}

export default DetailsSkeleton;

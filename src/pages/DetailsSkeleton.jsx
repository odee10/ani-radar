import AnimeInfoSkeleton from "../components/AnimeInfoSkeleton";
import DetailsHeroSkeleton from "../components/DetailsHeroSkeleton";
import FooterSkeleton from "../components/FooterSkeleton";

function DetailsSkeleton() {
  return (
    <div className="w-screen h-dvh animate-pulse">
      <DetailsHeroSkeleton />
      <AnimeInfoSkeleton />
      <FooterSkeleton />
    </div>
  );
}

export default DetailsSkeleton;

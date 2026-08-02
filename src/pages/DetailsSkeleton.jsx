import DetailsHeroSkeleton from "../components/DetailsHeroSkeleton";
import DetailsBodySkeleton from "../components/DetailsBodySkeleton";
import FooterSkeleton from "../components/FooterSkeleton";

function DetailsSkeleton() {
  return (
    <div className="w-screen h-dvh animate-pulse">
      <DetailsHeroSkeleton />
      <DetailsBodySkeleton />
      <FooterSkeleton />
    </div>
  );
}

export default DetailsSkeleton;

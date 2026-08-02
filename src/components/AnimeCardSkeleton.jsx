function AnimeCardSkeleton() {
  return (
    <div className="rounded-xl bg-black/20 animate-pulse overflow-hidden">
      <div className="w-screen max-w-51 min-h-55 bg-neutral-800"></div>
      <div className="p-4 min-h-20">
        <div className="py-2 mb-3 rounded-xl bg-neutral-800"></div>
        <div className="py-2 rounded-xl bg-neutral-800"></div>
      </div>
    </div>
  );
}

export default AnimeCardSkeleton;
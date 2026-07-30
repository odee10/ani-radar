function AnimeCardSkeleton(){
  return(
    <div className="min-w-60 min-h-95 rounded-xl bg-black/20 animate-pulse overflow-hidden">
      <div className="min-h-72 bg-neutral-800"></div>
      <div className="p-4">
        <div className="mb-3 h-6 rounded-xl bg-neutral-800"></div>
        <div className="w-26 h-5 rounded-xl bg-neutral-800"></div>
      </div>
    </div>
  );
}

export default AnimeCardSkeleton

// fix the grid display for the skeleton cards
function Header() {
  return (
    <div className="flex flex-col gap-2 sm:gap-4 px-4 sm:px-18 py-30 sm:py-40 text-center dark:bg-zinc-950/20">
      <h1 className="text-3xl sm:text-4xl text-white/90 font-black">
        Anime <strong className="text-lime-400">Radar</strong>
      </h1>
      <p className="sm:text-lg text-white/60 font-medium">
        Never lose track of the anime season again. Explore currently airing
        series, discover upcoming premieres, and browse seasonal lineups in one
        place. From brand-new debuts to highly anticipated sequels, Anime Radar
        helps you keep up with everything worth watching.
      </p>
    </div>
  );
}

export default Header;

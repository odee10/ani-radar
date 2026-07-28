function Footer() {
  return(
    <div className="flex justify-center border-t border-white/10 dark:bg-zinc-950/20">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-1 p-4 w-full max-w-200 text-sm text-white/30 text-center">
        <p>Powered by <a className="text-lime-400/80 hover:text-lime-400 font-medium underline decoration-1" href="https://jikan.moe/">Jikan API</a></p>
        <p>&copy; {new Date().getFullYear()} Anime Radar. All rights reserved</p>
        <a className="text-lime-400/80 hover:text-lime-400 font-medium underline decoration-1" href="https://github.com/odee10">Github</a>
      </div>
    </div>
  );
}

export default Footer
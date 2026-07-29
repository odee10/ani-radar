import AnimeData from "./AnimeData";

function AnimeSection({ title }){
  return(
    <div className="flex flex-col items-center px-4 py-8 overflow-hidden">
      <h1 className="mb-4 w-full max-w-160 text-2xl text-lime-400 font-black">{title}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-200">
        <AnimeData />
      </div>
    </div>
  );

}

export default AnimeSection
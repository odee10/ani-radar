import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex flex-col items-center gap-5 pt-16 w-screen h-dvh text-center font-medium">
      <div>
        <h1 className="text-6xl sm:text-8xl text-lime-400">404</h1>
        <h2 className="text-2xl sm:text-4xl">Page Not Found</h2>
      </div>
      <Link
        className="px-4 py-2 text-sm rounded-lg bg-white/5 hover:bg-white/10"
        to={"/"}
      >
        Back
      </Link>
    </div>
  );
}

export default NotFound;

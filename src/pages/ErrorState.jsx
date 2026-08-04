import { Link } from "react-router";

function ErrorState() {
  return (
    <div className="flex flex-col items-center gap-5 px-4 pt-16 w-screen h-dvh text-center font-medium">
      <div className="max-w-100 sm:max-w-130">
        <h1 className="sm:mb-2 text-2xl sm:text-3xl text-lime-400">
          Could not load this anime
        </h1>
        <p className="text-base sm:text-lg">
          Something went wrong while fetching the data. Please try again in a
          moment.
        </p>
      </div>
      <Link
        className="px-4 py-2 text-sm rounded-lg bg-white/5 hover:bg-white/10"
        to="/"
      >
        Back
      </Link>
    </div>
  );
}

export default ErrorState;
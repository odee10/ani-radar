import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center gap-5 pt-16 w-screen h-dvh text-center font-medium">
      <div>
        <h1 className="text-6xl sm:text-8xl">404</h1>
        <h2 className="text-2xl sm:text-4xl">Page Not Found</h2>
      </div>
      <Link className="px-4 py-2 text-sm sm:text-base rounded-lg bg-red-400 hover:bg-red-400/85" to={"/"}>GO HOME</Link>
    </div>
  );
}

export default NotFoundPage;

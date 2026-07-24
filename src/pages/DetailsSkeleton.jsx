function DetailsSkeleton() {
  return (
    <div className="w-screen h-dvh animate-pulse">
      <div>
        <div className="flex px-4 pt-4 pb-6">
          <div className="px-9 py-5 rounded-xl bg-zinc-800"></div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-4 sm:px-10">
          <div className="px-28 py-35 rounded-xl bg-zinc-800"></div>

          <div className="flex flex-col items-center gap-4">
            <div className="px-28 sm:px-40 py-5 sm:py-10 sm:rounded-xl bg-zinc-800"></div>
            <div className="px-28 sm:px-40 py-4 sm:py-6 rounded-xl bg-zinc-800"></div>

            <div className="flex justify-center flex-wrap gap-2 px-4 sm:min-w-60">
              <div className="px-10 py-4 rounded-full bg-zinc-800"></div>
              <div className="px-10 py-4 rounded-full bg-zinc-800"></div>
              <div className="px-10 py-4 rounded-full bg-zinc-800"></div>
            </div>

            <div>
              <div className="px-30 sm:px-40 py-4 rounded-xl bg-zinc-800"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsSkeleton;
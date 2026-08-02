function DetailsBodySkeleton() {
  return(
    <div className="flex flex-col sm:items-center gap-6 sm:gap-4 p-4 sm:p-10 min-w-full">
      <div className="py-20 sm:w-full sm:max-w-200 rounded-xl bg-zinc-800"></div>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 sm:w-full sm:max-w-200">
        <div className="py-60 sm:w-1/2 sm:max-h-20 rounded-xl bg-zinc-800"></div>
        <div className="py-20 sm:py-5 sm:w-1/2 sm:h-50 rounded-xl bg-zinc-800"></div>
      </div>
    </div>
  );
}

export default DetailsBodySkeleton
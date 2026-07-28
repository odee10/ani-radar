function FooterSkeleton() {
  return(
    <div className="flex justify-center">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 p-4 w-full max-w-200 text-sm text-white/30 text-center">
        <div className="px-25 py-3 rounded-xl bg-zinc-800"></div>
        <div className="px-35 py-3 rounded-xl bg-zinc-800"></div>
        <div className="px-10 py-3 rounded-xl bg-zinc-800"></div>
      </div>
    </div>
  );
}

export default FooterSkeleton
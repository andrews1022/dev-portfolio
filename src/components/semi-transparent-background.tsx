const SemiTransparentBackground = (): JSX.Element => {
  return (
    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-400/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
  );
};

export { SemiTransparentBackground };

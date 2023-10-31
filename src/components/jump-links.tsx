const JumpLinks = (): JSX.Element => {
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        <li>
          <a className="group flex items-center py-3 active" href="#about">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-900 transition-all group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />

            <span className="nav-text text-xs font-bold uppercase tracking-widest group-focus-visible:text-slate-200">
              About
            </span>
          </a>
        </li>

        <li>
          <a className="group flex items-center py-3" href="#experience">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-900 transition-all group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />

            <span className="nav-text text-xs font-bold uppercase tracking-widest group-focus-visible:text-slate-200">
              Experience
            </span>
          </a>
        </li>

        <li>
          <a className="group flex items-center py-3" href="#projects">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-900 transition-all group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />

            <span className="nav-text text-xs font-bold uppercase tracking-widest group-focus-visible:text-slate-200">
              Projects
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { JumpLinks };

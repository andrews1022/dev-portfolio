import Link from "next/link";

const links = [
  { href: "#about", text: "About" },
  { href: "#experience", text: "Experience" },
  { href: "#projects", text: "Projects" },
  { href: "#writing", text: "Writing" }
];

const JumpLinks = (): JSX.Element => {
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {links.map((link) => {
          return (
            <li key={link.href}>
              <Link href={link.href} className="group flex items-center py-3" scroll>
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-900 transition-all group-hover:w-16 group-focus-visible:w-16 group-hover:bg-orange-500 group-focus-visible:bg-orange-500 motion-reduce:transition-none" />

                <span className="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-orange-500 group-focus-visible:text-orange-500">
                  {link.text}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { JumpLinks };

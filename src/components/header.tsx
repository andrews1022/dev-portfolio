import Link from "next/link";

import { JumpLinks } from "@/components/jump-links";
import { SocialLinks } from "@/components/social-links";

const Header = (): JSX.Element => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          <Link href="/">Andrew Shearer</Link>
        </h1>

        <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
          Front End Developer at Syatt Media
        </h2>

        <p className="mt-4 max-w-xs leading-normal">
          I build accessible, inclusive products and digital experiences for the web.
        </p>

        <JumpLinks />
      </div>

      <SocialLinks />
    </header>
  );
};

export { Header };

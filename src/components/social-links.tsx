import { Github } from "@/components/icons/github";
import { LinkedIn } from "@/components/icons/linkedin";
import { Twitter } from "@/components/icons/twitter";

const SocialLinks = (): JSX.Element => {
  return (
    <nav aria-label="Social media links">
      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://github.com/bchiang7"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <Github />
          </a>
        </li>

        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://twitter.com/bchiang7"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">Twitter</span>
            <Twitter />
          </a>
        </li>

        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://www.linkedin.com/in/bchiang7/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedIn />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { SocialLinks };

import { Github } from "@/components/icons/github";
import { LinkedIn } from "@/components/icons/linkedin";
import { Twitter } from "@/components/icons/twitter";

const links = [
  {
    href: "https://github.com/andrews1022",
    text: "GitHub",
    icon: <Github />
  },
  {
    href: "https://twitter.com/andrew_devsrc",
    text: "Twitter",
    icon: <Twitter />
  },
  {
    href: "https://www.linkedin.com/in/andrew-shearer-webdev/",
    text: "LinkedIn",
    icon: <LinkedIn />
  }
];

const SocialLinks = (): JSX.Element => {
  return (
    <nav aria-label="Social media links">
      <ul className="ml-1 mt-8 flex items-center">
        {links.map((link) => {
          return (
            <li key={link.href} className="mr-5 text-xs">
              <a
                className="block hover:text-orange-500 focus:text-orange-500"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">{link.text}</span>

                {link.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { SocialLinks };

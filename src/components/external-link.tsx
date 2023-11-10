import type { ReactNode } from "react";

type ExternalLinkProps = {
  children: ReactNode;
  href: string;
};

const ExternalLink = ({ children, href }: ExternalLinkProps): JSX.Element => {
  return (
    <a
      href={href}
      className="font-medium text-orange-400 hover:text-orange-300 focus-visible:text-orange-300"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export { ExternalLink };

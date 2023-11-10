import { ExternalLink } from "@/components/external-link";

const links = {
  inter: "https://rsms.me/inter/",
  nextJs: "https://nextjs.org/",
  tailwind: "https://tailwindcss.com/",
  vercel: "https://vercel.com/",
  vsCode: "https://code.visualstudio.com/"
};

const Footer = (): JSX.Element => {
  return (
    <footer className="max-w-md pb-16 text-sm sm:pb-0">
      <p>
        Coded in <ExternalLink href={links.vsCode}>VS Code</ExternalLink> by yours truly. Built with{" "}
        <ExternalLink href={links.nextJs}>Next.js</ExternalLink> and{" "}
        <ExternalLink href={links.tailwind}>Tailwind CSS</ExternalLink>, deployed with{" "}
        <ExternalLink href={links.vercel}>Vercel</ExternalLink>. All text is set in the{" "}
        <ExternalLink href={links.inter}>Inter</ExternalLink> typeface.
      </p>
    </footer>
  );
};

export { Footer };

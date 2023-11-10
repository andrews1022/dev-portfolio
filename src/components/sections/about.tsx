import { ExternalLink } from "@/components/external-link";
import { MobileStickyHeading } from "@/components/mobile-sticky-heading";

const links = {
  devTo: "https://dev.to/andrews1022",
  massive: "https://engagemassive.com/",
  opacity: "https://www.opacitydesigngroup.com/",
  syatt: "https://syatt.io/",
  trackmania: "https://www.trackmania.com/"
};

const About = (): JSX.Element => {
  return (
    <section
      aria-label="About me"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="about"
    >
      <MobileStickyHeading>About</MobileStickyHeading>

      <div className="flex flex-col gap-y-4">
        <p>
          Back in 2018, I decided to start taking part time courses at BCIT to learn more about
          programming and software development. I eventually found my passion in web development,
          and in the fall of 2019, I decided to quit my job to pursue a career in web development
          and focus on learning about it full time. Fast-forward to today, and I&apos;ve had the
          privilege of building sites for some of the top agencies in the{" "}
          <ExternalLink href={links.opacity}>Lower</ExternalLink>{" "}
          <ExternalLink href={links.massive}>Mainland</ExternalLink> and{" "}
          <ExternalLink href={links.syatt}>Ontario</ExternalLink>.
        </p>

        <p>
          My main focus today is implementing new features and maintaining existing ecommerce sites
          for our clients at <ExternalLink href={links.syatt}>Syatt</ExternalLink>. In my free time,
          I like to write blog posts on <ExternalLink href={links.devTo}>dev.to</ExternalLink> about
          what I&apos;m currently learning. Lately I&apos;ve been learning about Bun, Docker,
          DigitalOcean, and Express, to name a few.
        </p>

        <p>
          When I&apos;m not at the computer, I&apos;m usually riding my bike somewhere and getting
          lost, hanging out with my cat Cleo, or chasing author medals in{" "}
          <ExternalLink href={links.trackmania}>Trackmania</ExternalLink>.
        </p>
      </div>
    </section>
  );
};

export { About };

import Image from "next/image";

import { MobileStickyHeading } from "@/components/mobile-sticky-heading";
import { ArrowRight } from "@/components/icons/arrow-right";
import { ArrowUpRight } from "@/components/icons/arrow-up-right";

const projects = [
  {
    description: "A massive, multi-page site built for a client using the Jamstack.",
    iamge: "/images/prenuvo.jpg",
    link: "https://github.com/andrews1022",
    technologies: ["Gatsby", "TypeScript", "Styled Components", "Contentful", "GraphQL"],
    title: "Prenuvo"
  },
  {
    description:
      "A fun game where the user gets to decide whether the name given is either a card from Magic: The Gathering, or a metal band.",
    iamge: "/images/magic-card-or-metal-band.jpg",
    link: "https://github.com/andrews1022",
    technologies: ["React", "Redux", "Axios", "TypeScript", "Styled Components"],
    title: "Magic Card or Metal Band"
  }
];

const Projects = (): JSX.Element => {
  return (
    <section
      aria-label="Selected projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="projects"
    >
      <MobileStickyHeading>Projects</MobileStickyHeading>

      {/* <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-400/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
      </div> */}

      {/* <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-400/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
      </div> */}

      <div>
        <ul className="group/list">
          {projects.map((project) => {
            return (
              <li key={project.title} className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-400/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />

                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight hover:text-orange-500 focus-visible:text-orange-300 group/link text-base"
                        href="https://v4.brittanychiang.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="brittanychiang.com (v4)"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />

                        <span>
                          {project.title} <ArrowUpRight />
                        </span>
                      </a>
                    </h3>

                    <p className="mt-2 text-sm leading-normal">{project.description}</p>

                    {/* <a
                      className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-orange-300 focus-visible:text-orange-300"
                      href="https://github.com/bchiang7/v4"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="6717 stars on GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-1 h-3 w-3"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>6,717</span>
                    </a> */}

                    <ul className="flex flex-wrap mt-4 gap-2" aria-label="Technologies used:">
                      {project.technologies.map((technology) => {
                        return (
                          <li key={technology}>
                            <span className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500">
                              {technology}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <Image
                    src={project.iamge}
                    alt={project.title}
                    width={200}
                    height={48}
                    placeholder="blur"
                    blurDataURL={project.iamge}
                    className="rounded border-2 border-slate-200/30 transition sm:order-1 sm:col-span-2 sm:translate-y-1"
                  />
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-12">
          <a
            href="https://github.com/andrews1022?tab=repositories"
            className="flex items-center leading-tight font-semibold group gap-x-1"
            target="_blank"
            rel="noreferrer"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-slate-400 group-hover:text-orange-500 motion-reduce:transition-none">
              View All Projects
            </span>

            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export { Projects };

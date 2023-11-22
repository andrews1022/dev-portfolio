import Image from "next/image";

import { MobileStickyHeading } from "@/components/mobile-sticky-heading";
import { Pill } from "@/components/pill";
import { SemiTransparentBackground } from "@/components/semi-transparent-background";

import { ArrowRight } from "@/components/icons/arrow-right";
import { ArrowUpRight } from "@/components/icons/arrow-up-right";

import { projects } from "@/data/projects";

const Projects = (): JSX.Element => {
  return (
    <section
      aria-label="Selected projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="projects"
    >
      <MobileStickyHeading>Projects</MobileStickyHeading>

      <ul className="group/list">
        {projects.map((project) => {
          return (
            <li key={project.title} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <SemiTransparentBackground />

                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight hover:text-orange-500 focus-visible:text-orange-300 group/link text-base"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={project.title}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />

                      <span>
                        {project.title} <ArrowUpRight />
                      </span>
                    </a>
                  </h3>

                  <p className="mt-2 text-sm leading-normal">{project.description}</p>

                  <ul className="flex flex-wrap mt-4 gap-2" aria-label="Technologies used:">
                    {project.technologies.map((technology) => {
                      return (
                        <li key={technology}>
                          <Pill>{technology}</Pill>
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
          href="https://github.com/andrews1022"
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
    </section>
  );
};

export { Projects };

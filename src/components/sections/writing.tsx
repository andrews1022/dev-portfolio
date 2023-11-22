/* eslint-disable @typescript-eslint/indent */

import Image from "next/image";

import { MobileStickyHeading } from "@/components/mobile-sticky-heading";
import { SemiTransparentBackground } from "@/components/semi-transparent-background";

import { ArrowUpRight } from "@/components/icons/arrow-up-right";

import { formatDate } from "@/lib/utils";

import type { DevToPost } from "@/types/dev";

const getPosts = async (): Promise<DevToPost[]> => {
  const res = await fetch("https://dev.to/api/articles?username=andrews1022&per_page=3", {
    next: {
      // revalidate once a week
      revalidate: 604800
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();

  return data;
};

const Writing = async (): Promise<JSX.Element> => {
  const posts = await getPosts();

  return (
    <section
      aria-label="Blog posts"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="writing"
    >
      <MobileStickyHeading>Writing</MobileStickyHeading>

      <ul>
        {posts.length > 0
          ? posts.map((post) => {
              return (
                <li className="mb-12" key={post.id}>
                  <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <SemiTransparentBackground />

                    <Image
                      src={post.cover_image}
                      alt={post.title}
                      width={200}
                      height={48}
                      placeholder="blur"
                      blurDataURL={post.cover_image}
                      className="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
                    />

                    <div className="z-10 col-span-6">
                      <p className="-mt-1 text-sm font-semibold leading-6 text-slate-400 lg:group-hover:text-slate-900">
                        {formatDate(post.created_at)}
                      </p>

                      <h3 className="-mt-1">
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-900 hover:text-orange-500 focus-visible:text-orange-500 group/link text-base"
                          href={post.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={post.title}
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />

                          <span>
                            {post.title} <ArrowUpRight />
                          </span>
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>
              );
            })
          : null}
      </ul>
    </section>
  );
};

export { Writing };

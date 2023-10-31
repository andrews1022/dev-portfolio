/* eslint-disable @typescript-eslint/indent */

import Image from "next/image";

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
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Writing
        </h2>
      </div>

      <ul>
        {posts.length > 0
          ? posts.map((post) => {
              return (
                <li className="mb-12" key={post.id}>
                  <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className=" absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-400/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
                    <Image
                      src={post.cover_image}
                      alt={post.title}
                      width="200"
                      height="48"
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

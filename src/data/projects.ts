import type { Project } from "@/types/data";

export const projects: Project[] = [
  {
    description: "A full stack GitHub Gists clone.",
    iamge: "/images/github-gists-clone.png",
    link: "https://github-gists-clone.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Drizzle", "NextAuth"],
    title: "GitHub Gists Clone"
  },
  {
    description: "A 1:1 clone of TinyPNG, a popular image compression site.",
    iamge: "/images/tinypng-clone.png",
    link: "https://tinypng-clone-1-to-1.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind", "JSZip", "FileSaver"],
    title: "TinyPNG Clone"
  }
];

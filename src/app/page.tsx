import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Writing } from "@/components/sections/writing";

const HomePage = (): JSX.Element => {
  return (
    <div className="relative">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />

          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />

            <Experience />

            <Projects />

            <Writing />

            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

const Footer = (): JSX.Element => {
  return (
    <footer className="max-w-md pb-16 text-sm sm:pb-0">
      <p>
        Coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          className="font-medium text-orange-400 hover:text-orange-300 focus-visible:text-orange-300"
          target="_blank"
          rel="noreferrer"
        >
          Visual Studio Code
        </a>{" "}
        by yours truly. Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium text-orange-400 hover:text-orange-300 focus-visible:text-orange-300"
          target="_blank"
          rel="noreferrer"
        >
          Next.js
        </a>
        and
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-orange-400 hover:text-orange-300 focus-visible:text-orange-300"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind CSS
        </a>
        , deployed with
        <a
          href="https://vercel.com/"
          className="font-medium text-orange-400 hover:text-orange-300 focus-visible:text-orange-300"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>
        . All text is set in the
        <a
          href="https://rsms.me/inter/"
          className="font-medium text-orange-400 hover:text-orange-300 focus-visible:text-orange-300"
          target="_blank"
          rel="noreferrer"
        >
          Inter
        </a>
        typeface.
      </p>
    </footer>
  );
};

export { Footer };

import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
};

const Pill = ({ children }: PillProps): JSX.Element => {
  return (
    <span className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500">
      {children}
    </span>
  );
};

export { Pill };

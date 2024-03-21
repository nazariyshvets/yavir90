import { PropsWithChildren } from "react";

const SectionTitle = ({
  children,
}: PropsWithChildren<Record<never, never>>) => (
  <h1 className="my-10 text-center text-3xl font-bold sm:my-12 sm:text-4xl xl:my-14 xl:text-5xl">
    {children}
  </h1>
);

export default SectionTitle;

import { PropsWithChildren } from "react";

const SectionTitle = ({
  children,
}: PropsWithChildren<Record<never, never>>) => (
  <h1 className="my-10 text-center text-2xl font-bold">{children}</h1>
);

export default SectionTitle;

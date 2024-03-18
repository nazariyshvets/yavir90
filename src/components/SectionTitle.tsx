import { PropsWithChildren } from "react";

const SectionTitle = ({
  children,
}: PropsWithChildren<Record<never, never>>) => (
  <h1 className="text-center text-xl font-bold">{children}</h1>
);

export default SectionTitle;

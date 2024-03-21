import { PropsWithChildren } from "react";

import SectionTitle from "./SectionTitle";

interface SectionProps {
  title?: string;
}

const Section = ({ title, children }: PropsWithChildren<SectionProps>) => (
  <section className="px-4 sm:px-12 xl:px-24">
    {title && <SectionTitle>{title}</SectionTitle>}
    <div>{children}</div>
  </section>
);

export default Section;

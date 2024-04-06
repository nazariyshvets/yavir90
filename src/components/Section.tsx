import { PropsWithChildren } from "react";

import SectionTitle from "./SectionTitle";

interface SectionProps {
  id?: string;
  title?: string;
}

const Section = ({ id, title, children }: PropsWithChildren<SectionProps>) => (
  <section id={id} className="px-4 sm:px-12 xl:px-24">
    {title && <SectionTitle>{title}</SectionTitle>}

    <div>{children}</div>
  </section>
);

export default Section;

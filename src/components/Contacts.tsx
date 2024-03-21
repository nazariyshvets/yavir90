import { BiPhone } from "react-icons/bi";

import Section from "./Section";

const Contacts = () => (
  <Section title="Контакти">
    <div className="flex items-center gap-2 text-lg sm:text-xl xl:text-2xl">
      <BiPhone /> <span>+380 50 980 2500</span>
    </div>
  </Section>
);

export default Contacts;

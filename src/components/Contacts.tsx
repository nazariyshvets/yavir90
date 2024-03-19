import { BiPhone } from "react-icons/bi";

import SectionTitle from "./SectionTitle";

const Contacts = () => (
  <section className="p-4 sm:px-12 xl:px-24">
    <SectionTitle>Контакти</SectionTitle>

    <div>
      <div className="flex items-center">
        <BiPhone /> +38 050 980 25 00
      </div>
    </div>
  </section>
);

export default Contacts;

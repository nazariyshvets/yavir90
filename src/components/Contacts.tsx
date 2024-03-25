import { BiPhone, BiEnvelope } from "react-icons/bi";

import Section from "./Section";
import Contact from "../types/Contact";

interface ContactsProps {
  contacts: Contact[];
}

const contactIconMap = {
  phone: <BiPhone />,
  email: <BiEnvelope />,
};

const Contacts = ({ contacts }: ContactsProps) => (
  <Section id="contacts" title="Контакти">
    {contacts.map((contact, i) => (
      <div
        key={i}
        className="flex items-center gap-2 text-lg sm:text-xl xl:text-2xl"
      >
        {contactIconMap[contact.type]} <span>{contact.value}</span>
      </div>
    ))}
  </Section>
);

export default Contacts;

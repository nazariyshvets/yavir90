import { ReactElement } from "react";

import { BiPhone, BiEnvelope } from "react-icons/bi";

import Section from "./Section";
import { Contact, ContactType } from "../types/Contact";

interface ContactsProps {
  contacts: Contact[];
}

const iconStyles = "w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8 fill-white";

const contactIconMap: Record<ContactType, ReactElement> = {
  phone: <BiPhone className={iconStyles} />,
  email: <BiEnvelope className={iconStyles} />,
};

const Contacts = ({ contacts }: ContactsProps) => (
  <Section id="contacts" title="Контакти">
    {contacts.map((contact, i) => (
      <div
        key={i}
        className="flex items-center gap-2 text-lg sm:text-xl xl:text-2xl"
      >
        <span className={iconStyles}>{contactIconMap[contact.type]}</span>
        <span>{contact.value}</span>
      </div>
    ))}
  </Section>
);

export default Contacts;

export type ContactType = "phone" | "email";

export interface Contact {
  type: ContactType;
  value: string;
}

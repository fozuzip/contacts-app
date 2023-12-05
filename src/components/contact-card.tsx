import type { Contact } from "../api";
import { Supervisor } from "../icons/supervisor";

interface ContactCardProps {
  contact: Contact;
}

export const ContactCard = ({ contact }: ContactCardProps) => {
  const { name, email, company } = contact;
  return (
    <section className="border-cyan rounded-md border-t-2 bg-white px-5 py-6 shadow-lg">
      <h3 className="pb-3 font-semibold">{name}</h3>
      <div className="text-grayish-blue pb-5 text-xs">
        <p>
          Company: <span className="font-semibold">{company.name}</span>
        </p>
        <p>
          E-mail: <span className="font-semibold">{email}</span>
        </p>
      </div>
      <div className="flex justify-end">
        <Supervisor size={50} className="cursor-pointer" />
      </div>
    </section>
  );
};

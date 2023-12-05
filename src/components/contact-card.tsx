import { useState } from "react";

import type { Contact } from "../api";
import { Supervisor } from "../icons/supervisor";
import { ContactModal } from "./contact-modal";

interface ContactCardProps {
  contact: Contact;
}

export const ContactCard = ({ contact }: ContactCardProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { name, email, company } = contact;
  return (
    <section>
      <div className="rounded-md border-t-2 border-cyan bg-white px-5 py-6 shadow-lg transition ease-in-out hover:-translate-y-1">
        <h3 className="pb-3 font-semibold">{name}</h3>
        <div className="pb-5 text-xs text-grayish-blue">
          <p>
            Company: <span className="font-semibold">{company.name}</span>
          </p>
          <p>
            E-mail: <span className="font-semibold">{email}</span>
          </p>
        </div>
        <div className="flex justify-end">
          <Supervisor
            size={50}
            className="cursor-pointer"
            onClick={() => setModalIsOpen(true)}
          />
        </div>
      </div>
      <ContactModal
        open={modalIsOpen}
        contact={contact}
        onClose={() => setModalIsOpen(false)}
      />
    </section>
  );
};

import { Contact } from "../api";
import { X } from "../icons/x";
import { Modal } from "./modal";

type ContactModalProps = React.ComponentProps<typeof Modal> & {
  contact: Contact;
};

export const ContactModal = ({ open, contact, onClose }: ContactModalProps) => {
  const { name, company, username, phone, email, website, address } = contact;

  return (
    <Modal open={open} onClose={onClose}>
      <>
        <div className="flex justify-between">
          <div>
            <h3 className="pb-1 text-xl font-semibold">{name}</h3>
            <p className="text-sm">{company.name}</p>
          </div>
          <X
            className="text-grayish-blue cursor-pointer"
            onClick={onClose}
            size={18}
          />
        </div>
        <div className="desktop:flex-row flex flex-col justify-stretch gap-4 px-4 text-sm">
          <div className="flex flex-1 flex-col justify-stretch gap-4 sm:flex-row">
            <div className="flex-1">
              <h4 className="font-semibold">Username:</h4>
              <p>{username}</p>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">Address:</h4>
              <p>{address.street}</p>
              <p>{address.city}</p>
              <p>{address.suite}</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-stretch gap-4 sm:flex-row">
            <div className="flex-1">
              <h4 className="font-semibold">Phone:</h4>
              <p>{phone}</p>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">Email:</h4>
              <p>{email}</p>
              <h4 className="font-semibold">Website:</h4>
              <p>{website}</p>
            </div>
          </div>
        </div>
      </>
    </Modal>
  );
};

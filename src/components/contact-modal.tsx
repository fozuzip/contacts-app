import { Contact } from "../api";
import { X } from "../icons/x";

interface ModalProps {
  open: boolean;
  contact: Contact;
  onClose: () => void;
}
export const ContactModal = ({ open, contact, onClose }: ModalProps) => {
  const { name, company, username, phone, email, website, address } = contact;
  console.log(contact);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center overflow-y-auto overflow-x-hidden bg-black/60 outline-none focus:outline-none"
      onClick={onClose}
    >
      <div
        className="relative mx-6 mt-20 w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-cyan flex w-full flex-col gap-10 border-b-2 bg-white px-6 py-6 shadow-lg">
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
        </div>
      </div>
    </div>
  );
};

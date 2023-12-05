import { Transition } from "@headlessui/react";

export interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}
export const Modal = ({ open, children, onClose }: ModalProps) => {
  return (
    <Transition
      show={open}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className="fixed inset-0 z-50 flex justify-center overflow-y-auto overflow-x-hidden bg-black/60 outline-none focus:outline-none"
        onClick={onClose}
      >
        <div
          className="relative mx-6 mt-20 w-full max-w-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex w-full flex-col gap-10 border-b-2 border-cyan bg-white px-6 py-6 shadow-lg">
            {children}
          </div>
        </div>
      </div>
    </Transition>
  );
};

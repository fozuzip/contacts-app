import { X } from "../icons/x";

export interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}
export const Modal = ({ open, children, onClose }: ModalProps) => {
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
          {children}
        </div>
      </div>
    </div>
  );
};

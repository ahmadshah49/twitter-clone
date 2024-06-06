import React, { useCallback } from "react";

interface ModalProps {
  isOpen?: boolean;
  onSubmit: () => void;
  onClose: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }
  return (
    <div
      className="
  justify-center
  items-center
  flex
  inset-0
  overflow-x-hidden
  overflow-y-auto
  fixed
  z-50
  outline-none
  focus:outline-none
  bg-neutral-800
  bg-opacity-70

  "
    >
      <div
        className="
      relative
      w-full
      lg:w-3/6
      my-6
      mx-auto
      lg:max-w-3xl
      h-full
      lg:h-auto
      "
      >
        {/* {Content}  */}
        <div
          className="
        h-full
        lg:h-auto
        border-0
        rounded-lg
        relative
        shadow-lg
        flex
        flex-col
        w-full
        bg-black
        outline-none
        focus:outline-none
        "
        >
          {/* Header  */}
          <div className="text-white">
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

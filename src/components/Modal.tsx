import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  url: string;
  onClose: () => void;
}

const Modal = ({ url, onClose }: ModalProps) => {
  const mediaWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mediaWrapperRef.current &&
        !mediaWrapperRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return createPortal(
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[99] flex items-center justify-center bg-deep-black bg-opacity-70 p-4">
      <div
        ref={mediaWrapperRef}
        className="max-h-full max-w-[256px] overflow-auto sm:max-w-[512px] xl:max-w-[1024px]"
      >
        <video
          src={url}
          controls
          className="max-h-full max-w-full rounded object-cover"
          draggable={false}
        />
      </div>
    </div>,
    document.body,
  );
};

export default Modal;

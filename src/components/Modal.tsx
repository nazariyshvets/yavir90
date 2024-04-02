import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";

interface ModalProps {
  type: "img" | "video";
  url?: string;
  onClose: () => void;
}

const Modal = ({ type, url, onClose }: ModalProps) => {
  const [isImgFullscreen, setIsImgFullscreen] = useState(false);
  const mediaWrapperRef = useRef<HTMLDivElement>(null);
  const imgWrapperRef = useRef<HTMLDivElement>(null);

  const toggleImgFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      imgWrapperRef.current?.requestFullscreen();
    }
  };

  useEffect(() => {
    const handleKeyDown = () => {
      if (document.fullscreenElement) {
        setIsImgFullscreen(true);
      } else {
        setIsImgFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleKeyDown);

    return () => {
      document.removeEventListener("fullscreenchange", handleKeyDown);
    };
  }, []);

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

  const mediaItemAttrs = {
    src: url,
    className:
      "max-h-full w-full h-full max-w-full rounded object-contain overflow-hidden bg-white",
    draggable: false,
  };

  return createPortal(
    <div
      className="fixed bottom-0 left-0 right-0 top-0 z-[99] flex items-center justify-center bg-deep-black bg-opacity-70 p-4"
      onClick={(event) => event.stopPropagation()}
    >
      <div
        ref={mediaWrapperRef}
        className="max-h-full max-w-[256px] overflow-auto sm:max-w-[512px] xl:max-w-[1024px]"
      >
        {url ? (
          type === "img" ? (
            <div ref={imgWrapperRef} className="relative">
              <img alt="image" {...mediaItemAttrs} />
              <button
                className="absolute bottom-2 right-2 rounded bg-charcoal p-1"
                onClick={toggleImgFullscreen}
              >
                {isImgFullscreen ? (
                  <BiExitFullscreen className="text-base sm:text-lg xl:text-xl" />
                ) : (
                  <BiFullscreen className="text-base sm:text-lg xl:text-xl" />
                )}
              </button>
            </div>
          ) : (
            <video controls {...mediaItemAttrs} />
          )
        ) : (
          <div className="flex max-h-full max-w-full items-center justify-center rounded bg-charcoal p-10 text-base text-white sm:text-lg xl:text-xl">
            Файл не знайдено
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;

import { memo, useCallback } from "react";
import { CloseOutlined } from "@ant-design/icons";

const VideoModal = memo(({ show, videoUrl, onClose }) => {
  const stopClose = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <>
      {show && (
        <div className="z-50 fixed inset-0" onClick={handleClose}>
          <div className="w-full h-full bg-black opacity-70"></div>
          <div
            onClick={stopClose}
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[152.889vh] h-[86vh] bg-white"
          >
            <button
              onClick={handleClose}
              className="absolute -top-5 -right-[78px] bg-gray-300 hover:bg-transparent px-3 py-[6px]"
            >
              <CloseOutlined className="text-xl text-pri-landing" />
            </button>

            <iframe
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen="allowfullscreen"
              allow="autoplay; fullscreen"
              src={videoUrl}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
});

export default VideoModal;

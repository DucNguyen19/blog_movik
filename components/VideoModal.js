import { CloseOutlined } from "@ant-design/icons";

function VideoModal({ show, videoUrl, onClose }) {
  const stopClose = (e) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {show && (
        <div className="z-50 fixed inset-0" onClick={handleClose}>
          <button
            onClick={handleClose}
            className="z-[60] lg:hidden absolute top-6 right-6 bg-gray-300 hover:bg-transparent px-3 py-[6px]"
          >
            <CloseOutlined className="text-xl text-pri-landing" />
          </button>
          <div className="w-full h-full bg-black opacity-70"></div>
          <div
            onClick={stopClose}
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90vw] h-[50.625vw] lg:w-[152.889vh] lg:h-[86vh] bg-white"
          >
            <button
              onClick={handleClose}
              className="hidden xl:block absolute -top-5 -right-[78px] bg-gray-300 hover:bg-transparent px-3 py-[6px]"
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
}

export default VideoModal;

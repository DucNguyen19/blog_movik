import {
  FacebookFilled,
  InstagramFilled,
  QqCircleFilled,
  TwitterCircleFilled,
  YoutubeFilled,
  AppleFilled,
  CaretLeftFilled,
  CaretRightFilled,
} from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import VideoModal from "./VideoModal";

function LandingPage({ data }) {
  const [musicSwiper, setMusicSwiper] = useState({});
  const [videoSwiper, setVideoSwiper] = useState({});
  const [videoModalOptions, setVideoModalOptions] = useState({
    open: false,
    url: "",
  });

  const socialsData = data?.header?.social?.map((s) => {
    switch (s?.image) {
      case "facebook":
        return {
          icon: (
            <FacebookFilled className="text-xl text-[#888FC0] hover:text-pri-landing" />
          ),
          link: s.link,
        };
      case "instagram":
        return {
          icon: (
            <InstagramFilled className="text-xl text-[#888FC0] hover:text-pri-landing" />
          ),
          link: s.link,
        };
      case "spotify":
        return {
          icon: (
            <QqCircleFilled className="text-xl text-[#888FC0] hover:text-pri-landing" />
          ),
          link: s.link,
        };
      case "twitter":
        return {
          icon: (
            <TwitterCircleFilled className="text-xl text-[#888FC0] hover:text-pri-landing" />
          ),
          link: s.link,
        };
      case "youtube":
        return {
          icon: (
            <YoutubeFilled className="text-xl text-[#888FC0] hover:text-pri-landing" />
          ),
          link: s.link,
        };
      case "apple":
        return {
          icon: (
            <AppleFilled className="text-xl text-[#888FC0] hover:text-pri-landing" />
          ),
          link: s.link,
        };
    }
  });
  const bannerData = data?.banner;
  const media = data?.media;
  const storeData = data?.store;
  const tourData = data?.tour;

  const prevMusicSlider = () => {
    musicSwiper.slidePrev();
  };
  const nextMusicSlider = () => {
    musicSwiper.slideNext();
  };
  const prevVideoSlider = () => {
    videoSwiper.slidePrev();
  };
  const nextVideoSlider = () => {
    videoSwiper.slideNext();
  };

  const handleOpenVideo = (url) => {
    setVideoModalOptions({
      open: true,
      // url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      url: "https://www.youtube-nocookie.com/embed/tp4fUH2E8uc?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1",
    });
  };
  const handleCloseVideo = () => {
    setVideoModalOptions({
      open: false,
      url: "",
    });
  };

  return (
    <div
      className={`text-[17px] ${
        !data?.application_setting.background_color &&
        "bg-fixed bg-center bg-cover bg-no-repeat !bg-[url(/images/bg-shawn.png)]"
      }`}
      style={{
        backgroundColor: data?.application_setting.background_color,
      }}
    >
      <header
        className="z-10 h-[76px] fixed inset-0 px-8 flex items-center shadow-[0_3px_5px_0_rgba(0,0,0,0.1)]"
        style={{
          backgroundColor: data?.header?.color || "#000",
        }}
      >
        <div className="w-2/5 flex items-center gap-6">
          {data?.header?.page?.map((p, index) => (
            <a
              key={index}
              href={p.slug}
              // target={p.title === "Tour" && "_blank"}
              className="uppercase text-[#888fc0] hover:text-pri-landing"
            >
              {p.title}
            </a>
          ))}
        </div>
        <a href="/" className="w-1/5 flex justify-center">
          <img
            src={data?.header?.image || "/images/logo.png"}
            className="w-[180px]"
          />
        </a>
        <div className="w-2/5 flex items-center justify-end gap-4">
          {socialsData?.map((s, index) => (
            <a key={index} href={s.link}>
              {s.icon}
            </a>
          ))}
        </div>
      </header>

      <div className="m-8 mt-[76px] min-h-screen">
        {/* Banner */}
        {bannerData.is_show && (
          <Swiper itemRef="" loop={true} slidesPerView={1} className="!-mx-8">
            {bannerData?.list?.map((b, index) => (
              <SwiperSlide key={index}>
                <a href={b.link}>
                  <img src={b.image} className="w-full h-full object-contain" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Music */}
        {media.is_show && (
          <div id="music" className="mt-[100px]">
            <h1 className="pl-20 pr-24 text-end text-8xl font-bold text-pri-landing">
              MUSIC
            </h1>
            <div className="relative mt-2 px-20">
              <button
                onClick={prevMusicSlider}
                className="absolute left-0 top-1/2 w-16 -translate-y-1/2"
              >
                <div className="float-left">
                  <CaretLeftFilled className="text-2xl text-pri-landing" />
                  <div className="absolute top-1/2 left-4 -translate-y-[20%] h-0.5 w-10 bg-pri-landing"></div>
                </div>
              </button>
              <button
                onClick={nextMusicSlider}
                className="absolute right-0 top-1/2 w-16 -translate-y-1/2"
              >
                <div className="float-right">
                  <CaretRightFilled className="text-2xl text-pri-landing" />
                  <div className="absolute top-1/2 right-4 -translate-y-[20%] h-0.5 w-10 bg-pri-landing"></div>
                </div>
              </button>
              <Swiper
                loop={true}
                slidesPerView={1}
                onInit={(e) => setMusicSwiper(e)}
              >
                {media?.list?.music?.map((m, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex">
                      <div className="w-1/2">
                        <img src={m.image} className="w-full h-full" />
                      </div>
                      <div className="w-1/2 flex items-center text-pri-landing">
                        <div className="px-12">
                          <h3 className="relative uppercase tracking-widest">
                            Latest relase
                            <div className="absolute top-8 left-0 bg-pri-landing h-[1px] w-[50px]"></div>
                          </h3>
                          <h1 className="mt-8 text-7xl uppercase font-bold">
                            {m.heading}
                          </h1>
                          <button className="mt-5 py-[10px] px-6 rounded-3xl bg-pri-landing text-black font-bold uppercase hover:bg-[#888fc0] transition-colors duration-3000">
                            {m.button}
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}

        {/* Video */}
        {media.is_show && (
          <div id="video" className="mt-[100px]">
            <h1 className="pl-24 pr-20 text-8xl font-bold text-pri-landing">
              VIDEO
            </h1>
            <div className="relative mt-2 px-20">
              <button
                onClick={prevVideoSlider}
                className="absolute left-0 top-1/2 w-16 -translate-y-1/2"
              >
                <div className="relative float-left">
                  <CaretLeftFilled className="text-2xl text-pri-landing" />
                  <div className="absolute top-1/2  left-4 h-0.5 w-10 bg-pri-landing"></div>
                </div>
              </button>
              <button
                onClick={nextVideoSlider}
                className="absolute right-0 top-1/2 w-16 -translate-y-1/2"
              >
                <div className="relative float-right">
                  <CaretRightFilled className="text-2xl text-pri-landing" />
                  <div className="absolute top-1/2  right-4 h-0.5 w-10 bg-pri-landing"></div>
                </div>
              </button>
              <Swiper
                loop={true}
                slidesPerView={1}
                onInit={(e) => setVideoSwiper(e)}
              >
                {media?.list?.video?.map((v, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative">
                      <img src={v.image} className="w-full h-ful" />
                      <div className="w-[900px] text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                        <button
                          onClick={() => handleOpenVideo(v.link)}
                          className=""
                        >
                          <CaretLeftFilled className="text-9xl text-pri-landing hover:text-[#888fc0]" />
                        </button>
                        <h1 className="text-5xl leading-[60px] text-center text-pri-landing font-bold">
                          {v.heading}
                        </h1>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}

        {/* Store */}
        {storeData?.is_show && (
          <div id="store" className="mt-[100px]">
            <h1 className="pl-24 pr-20 text-8xl font-bold text-pri-landing">
              STORE
            </h1>
            <div className="mt-2 grid grid-flow-col-1 lg:grid-cols-3 gap-8">
              {storeData?.list?.map((s, index) => (
                <div key={index} className="">
                  <a href={s.link}>
                    <img src={s.image} className="" />
                  </a>
                  <h2 className="mt-4 tracking-wider text-lg text-pri-landing">
                    {s.heading}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tour */}
        {tourData?.is_show && (
          <div id="tour" className="mt-[160px]">
            <h1 className="float-right pl-20  pr-24 text-8xl font-bold text-pri-landing">
              TOUR
            </h1>
            <div className="mt-2 w-full flex justify-center items-center">
              <div className="w-[40%] text-center">
                <h2 className="mt-10 uppercase text-lg text-white text-center">
                  SORRY, THERE ARE NO SHOWS CURRENTLY AVAILABLE. TO BE NOTIFIED
                  OF NEW TOUR DATES WHEN THEY ARE ANNOUNCED, CLICK THE RSVP LINK
                  BELOW.
                </h2>
                <a href="#" className="my-8 block font-bold text-pri-landing">
                  RSVP
                </a>
                <button className="py-[10px] px-6 rounded-3xl bg-[#d18559] text-black font-bold uppercase hover:bg-[#888fc0] transition-colors duration-3000">
                  VIEW ALL DATES
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contact */}
        <div className="mt-[180px] mb-[200px] flex justify-between">
          <form className="w-[48%] flex flex-col text-pri-landing">
            <label htmlFor="email" className="text-sm font-bold">
              * EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter email"
              required
              className="p-[10px] uppercase pl-0 bg-transparent border-b-[2px] font-medium tracking-widest border-[#d18559] text-[#d18559]"
            />
            <label htmlFor="contact" className="mt-8 text-sm font-bold">
              * CONTACT
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="enter contact"
              required
              className="p-[10px] uppercase pl-0 text-base bg-transparent border-b-[2px] text-base font-medium tracking-widest border-[#d18559] text-[#d18559]"
            />
            <button
              type="submit"
              className="mt-10 w-[220px] py-[10px] rounded-3xl bg-[#d18559] text-black font-bold uppercase hover:bg-[#888fc0] transition-colors duration-3000"
            >
              SUBMIT
            </button>
          </form>
          <div className="w-1/2 flex justify-end items-center text-[110px] font-bold text-pri-landing">
            Thank You
          </div>
        </div>
      </div>

      <footer
        className="h-[76px] px-8 flex items-center"
        style={{
          backgroundColor: data?.header?.color || "#000",
        }}
      >
        <div className="flex-1 text-[#888FCC]">
          <span>© 2023 Island</span>
          <span className="ml-6">
            Privacy Policy Terms & Conditions Do Not Sell My Personal
            Information Cookie Choices
          </span>
        </div>
        <div className="w-2/5 flex items-center justify-end gap-4">
          {socialsData?.map((s, index) => (
            <a key={index} href={s.link}>
              {s.icon}
            </a>
          ))}
        </div>
      </footer>

      {/* Video modal */}
      <VideoModal
        show={videoModalOptions.open}
        videoUrl={videoModalOptions.url}
        onClose={handleCloseVideo}
      />
    </div>
  );
}

export default LandingPage;

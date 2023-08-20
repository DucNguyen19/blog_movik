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
import { Noto_Sans } from "@next/font/google";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import VideoModal from "./VideoModal";

const textFont = Noto_Sans({
  weight: ["300", "500", "600", "700", "900"],
  subsets: ["latin"],
});

function LandingPage({ data }) {
  const router = useRouter();
  const [musicSwiper, setMusicSwiper] = useState({});
  const [videoSwiper, setVideoSwiper] = useState({});
  const [storeShowItem, setStoreShowItem] = useState(3);
  const [isShowAllTour, setIsShowAllTou] = useState(false);
  const [videoModalOptions, setVideoModalOptions] = useState({
    open: false,
    url: "",
  });

  const socialsData = data?.header?.social?.map((s) => {
    switch (s?.image) {
      case "facebook":
        return {
          icon: (
            <FacebookFilled className="text-xl text-pri-landing-blue hover:text-pri-landing" />
          ),
          link: s.link,
        };
      case "instagram":
        return {
          icon: (
            <InstagramFilled className="text-xl text-pri-landing-blue hover:text-pri-landing" />
          ),
          link: s.link,
        };
      case "spotify":
        return {
          icon: (
            <QqCircleFilled className="text-xl text-pri-landing-blue hover:text-pri-landing" />
          ),
          link: s.link,
        };
      case "twitter":
        return {
          icon: (
            <TwitterCircleFilled className="text-xl text-pri-landing-blue hover:text-pri-landing" />
          ),
          link: s.link,
        };
      case "youtube":
        return {
          icon: (
            <YoutubeFilled className="text-xl text-pri-landing-blue hover:text-pri-landing" />
          ),
          link: s.link,
        };
      case "apple":
        return {
          icon: (
            <AppleFilled className="text-xl text-pri-landing-blue hover:text-pri-landing" />
          ),
          link: s.link,
        };
    }
  });
  const bannerData = data?.banner;
  const media = data?.media;
  const storeData = data?.store;
  const tourData = useCallback(() => {
    if (!Array.isArray(data?.tours?.list)) return;

    if (isShowAllTour) return data.tours;
    else if (data.tours.list.length > 5) {
      const newTours = {
        ...data.tours,
        list: data.tours.list.slice(0, 5),
      };
      return newTours;
    } else return data.tours;
  }, [isShowAllTour])();
  const footerData = [];

  const handleOpenVideo = (url) => {
    document.body.classList.add("video-modal-open");
    setVideoModalOptions({
      open: true,
      // url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      url: "https://www.youtube-nocookie.com/embed/tp4fUH2E8uc?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1",
    });
  };
  const handleCloseVideo = () => {
    document.body.classList.remove("video-modal-open");
    setVideoModalOptions({
      open: false,
      url: "",
    });
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleShowMore = () => {
    setStoreShowItem((prevNumItems) => prevNumItems + 3);
  };

  return (
    <div
      className={`${textFont.className} ${
        !data?.application_setting?.background_color &&
        "bg-fixed bg-center bg-cover bg-no-repeat !bg-[url(/images/bg-shawn.png)]"
      }`}
      style={{
        backgroundColor: data?.application_setting?.background_color,
      }}
    >
      <header
        className="z-10 h-[76px] fixed inset-0 shadow-[0_3px_5px_0_rgba(0,0,0,0.1)]"
        style={{
          backgroundColor: data?.header?.color || "#000",
        }}
      >
        <div className="h-full flex items-center px-8 2xl:w-[1440px] 2xl:mx-auto 2xl:px-0">
          <div className="w-2/5 flex items-center gap-6">
            {data?.header?.page?.map((p, index) => (
              <a
                key={index}
                href={p.slug}
                className="uppercase text-pri-landing-blue hover:text-pri-landing"
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
        </div>
      </header>

      <div className="m-8 mt-[76px] min-h-screen">
        {/* Banner */}
        {bannerData?.is_show && (
          <Swiper itemRef="" loop={true} slidesPerView={1} className="!-mx-8">
            {bannerData?.list?.map((b, index) => (
              <SwiperSlide key={index}>
                <a
                  href={b.link}
                  className="relative block w-full h-[calc(100vh-76px)]"
                >
                  <img
                    src={b.image}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Music */}
        {media?.is_show && (
          <div id="music" className="mt-[100px] 2xl:w-[1440px] 2xl:mx-auto">
            <h1 className="pl-20 pr-24 text-end text-[110px] font-[900] text-pri-landing">
              MUSIC
            </h1>
            <div className="relative -mt-4 px-16">
              <button
                onClick={() => musicSwiper.slidePrev()}
                className="absolute left-0 top-1/2 w-16 -translate-y-1/2"
              >
                <div className="relative float-left">
                  <CaretLeftFilled className="-ml-[6px] text-2xl text-pri-landing" />
                  <div className="absolute top-1/2 left-[11px] h-0.5 w-10 bg-pri-landing"></div>
                </div>
              </button>
              <button
                onClick={() => musicSwiper.slideNext()}
                className="absolute right-0 top-1/2 w-16 -translate-y-1/2"
              >
                <div className="relative float-right">
                  <CaretRightFilled className="-mr-[6px] text-2xl text-pri-landing" />
                  <div className="absolute top-1/2 right-[11px] h-0.5 w-10 bg-pri-landing"></div>
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
                          <h3 className="relative font-semibold text-xs uppercase tracking-[0.3rem]">
                            Latest relase
                            <div className="absolute top-7 left-0 bg-pri-landing h-[1px] w-[50px]"></div>
                          </h3>
                          <h1 className="mt-8 text-6xl font-[900] leading-[1.1em] uppercase font-">
                            {m.heading}
                          </h1>
                          <button
                            className={`mt-5 py-[10px] px-6 rounded-3xl text-black font-bold uppercase transition-colors duration-3000 ${
                              !data?.application_setting?.button_color &&
                              "bg-[#d18559] hover:bg-[#888fc0] hover:text-white"
                            }`}
                            style={{
                              backgroundColor:
                                data?.application_setting?.button_color &&
                                data?.application_setting?.button_color,
                            }}
                          >
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
        {media?.is_show && (
          <div id="video" className="mt-[100px] 2xl:w-[1440px] 2xl:mx-auto">
            <h1 className="pl-24 pr-20 text-[110px] font-[900] text-pri-landing">
              VIDEOS
            </h1>
            <div className="relative -mt-4 px-16">
              <button
                onClick={() => videoSwiper.slidePrev()}
                className="absolute left-0 top-1/2 w-16 -translate-y-1/2"
              >
                <div className="relative float-left">
                  <CaretLeftFilled className="-ml-[6px] text-2xl text-pri-landing" />
                  <div className="absolute top-[51%] left-[11px] h-0.5 w-10 bg-pri-landing"></div>
                </div>
              </button>
              <button
                onClick={() => videoSwiper.slideNext()}
                className="absolute right-0 top-1/2 w-16 -translate-y-1/2"
              >
                <div className="relative float-right">
                  <CaretRightFilled className="-mr-[6px] text-2xl text-pri-landing" />
                  <div className="absolute top-[51%] right-[11px] h-0.5 w-10 bg-pri-landing"></div>
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
                      <div className="w-[70%] text-center absolute left-1/2 -translate-x-1/2 top-[30%]">
                        <button
                          onClick={() => handleOpenVideo(v.link)}
                          className="-my-2"
                        >
                          <CaretRightFilled className="text-[120px] text-pri-landing hover:text-pri-landing-blue" />
                        </button>
                        <h1 className="text-4xl leading-[60px] text-center text-pri-landing font-[900]">
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
          <div id="store" className="mt-[100px] 2xl:w-[1440px] 2xl:mx-auto">
            <h1 className="pl-24 pr-20 text-[110px] font-[900] text-pri-landing">
              STORE
            </h1>
            <div className="-mt-3 grid grid-flow-col-1 lg:grid-cols-3 gap-8">
              {storeData?.list?.slice(0, storeShowItem).map((s, index) => (
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
            {storeShowItem < storeData?.list?.length && (
              <div className="text-center">
                <button
                  onClick={handleShowMore}
                  className={`mt-20 min-w-[200px] py-[10px] px-6 rounded-3xl text-black font-bold uppercase transition-colors duration-3000 ${
                    !data?.application_setting?.button_color &&
                    "bg-[#d18559] hover:bg-[#888fc0] hover:text-white"
                  }`}
                  style={{
                    backgroundColor:
                      data?.application_setting?.button_color &&
                      data?.application_setting?.button_color,
                  }}
                >
                  Show more
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tour */}
        {tourData?.is_show && (
          <div id="tour" className="mt-40 2xl:w-[1440px] 2xl:mx-auto">
            <h1 className="pl-20 pr-24 text-end text-[110px] font-[900] text-pri-landing">
              TOUR
            </h1>
            <div className="w-[76%] mx-auto">
              {tourData?.list?.map(
                (t, index) =>
                  t.is_show && (
                    <div
                      key={index}
                      onClick={() => router.push(t.link)}
                      className="flex py-5 cursor-pointer hover:bg-[rgba(0,0,0,0.05)] border-b border-b-pri-tour"
                    >
                      <div className="w-[60%] text-white font-bold">
                        <div className="">{t.info?.date}</div>
                        <div className="mt-1 flex gap-2">
                          <h2 className="w-[65%] leading-5">{t.info?.title}</h2>
                          <h2 className="w-[35%]">{t.info?.artist}</h2>
                        </div>
                        <div className="mt-1 min-h-[12px] opacity-70 text-[0.7rem]">
                          {t.info?.type}
                        </div>
                      </div>
                      <div className="w-[40%] flex justify-end items-center gap-2">
                        {t.isVip ? (
                          <a
                            href={t.button?.vipLink}
                            target="_blank"
                            onClick={stopPropagation}
                            className="min-w-[160px] h-12 flex items-center justify-center font-bold text-[#2f3237] hover:text-white bg-pri-landing cursor-pointer"
                          >
                            VIP
                          </a>
                        ) : (
                          <div className="min-w-[160px]"></div>
                        )}
                        <a
                          href={t.button?.link}
                          target="_blank"
                          onClick={stopPropagation}
                          className="min-w-[160px] h-12 flex items-center justify-center font-bold text-black hover:text-[#85c8d5] bg-white border-4 border-pri-landing cursor-pointer"
                        >
                          TICKETS
                        </a>
                      </div>
                    </div>
                  )
              )}
              <div className="mt-16 flex flex-col items-center">
                <h2 className="text-white text-lg font-bold">
                  Get notified when new events are announced in your area
                </h2>
                <a
                  href="#"
                  className="mt-2 block px-5 py-3 font-bold text-sm uppercase border-2 border-black rounded bg-white w-fit hover:text-white hover:bg-black hover:border-white"
                >
                  FOLLOW JOHN MAYER
                </a>
              </div>
              {data?.tours?.list?.length > 5 && !isShowAllTour && (
                <div className="text-center">
                  <button
                    onClick={() => setIsShowAllTou(true)}
                    className={`mt-20 min-w-[200px] py-[10px] px-6 rounded-3xl text-black font-bold uppercase transition-colors duration-3000 ${
                      !data?.application_setting?.button_color &&
                      "bg-[#d18559] hover:bg-[#888fc0] hover:text-white"
                    }`}
                    style={{
                      backgroundColor:
                        data?.application_setting?.button_color &&
                        data?.application_setting?.button_color,
                    }}
                  >
                    Show all
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Subscriber */}
        <div
          id="subscribe"
          className="mt-[180px] mb-[200px] flex justify-between 2xl:w-[1440px] 2xl:mx-auto"
        >
          <form className="w-[45%] flex flex-col text-pri-landing">
            <label
              htmlFor="email"
              className="text-xs tracking-[0.2em] font-bold"
            >
              * EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter email"
              required
              className="p-[10px] uppercase pl-0 bg-transparent border-b-[2px] tracking-widest border-[#d18559] text-[#d18559]"
            />
            <label
              htmlFor="contact"
              className="mt-8 text-xs tracking-[0.2em] font-bold"
            >
              * CONTACT
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="enter contact"
              required
              className="p-[10px] uppercase pl-0 bg-transparent border-b-[2px] tracking-widest border-[#d18559] text-[#d18559]"
            />
            <button
              type="submit"
              className={`mt-10 w-[220px] py-[10px] rounded-3xl text-black font-bold uppercase hover:bg-[#888fc0] transition-colors duration-3000 ${
                !data?.application_setting?.button_color &&
                "bg-[#d18559] hover:bg-[#888fc0]"
              }`}
              style={{
                backgroundColor:
                  data?.application_setting?.button_color &&
                  data?.application_setting?.button_color,
              }}
            >
              SUBMIT
            </button>
          </form>
          <div className="w-1/2 flex justify-end items-center text-[110px] font-[900] text-pri-landing">
            Thank You
          </div>
        </div>
      </div>

      <footer
        className="h-[76px]"
        style={{
          backgroundColor: data?.header?.color || "#000",
        }}
      >
        <div className="h-full flex items-center px-8 2xl:w-[1440px] 2xl:mx-auto 2xl:px-0">
          <div className="flex-1 flex text-pri-landing-blue">
            <a href="/">© 2023 Island</a>
            <div className="ml-6">
              Privacy Policy Terms & Conditions Do Not Sell My Personal
              Information Cookie Choices
            </div>
          </div>
          <div className="w-fit flex items-center gap-4">
            {socialsData?.map((s, index) => (
              <a key={index} href={s.link}>
                {s.icon}
              </a>
            ))}
          </div>
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

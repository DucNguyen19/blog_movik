import {
  FacebookFilled,
  InstagramFilled,
  QqCircleFilled,
  TwitterCircleFilled,
  YoutubeFilled,
  AppleFilled,
  CaretLeftFilled,
  CaretRightFilled,
  MenuOutlined,
} from "@ant-design/icons";
import { Noto_Sans } from "@next/font/google";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import VideoModal from "./VideoModal";
import { Button, Dropdown, Space } from "antd";

const textFont = Noto_Sans({
  weight: ["300", "500", "600", "700", "900"],
  subsets: ["latin"],
});

function LandingPage({ data, classList, checkEdit }) {
  const router = useRouter();
  const [musicSwiper, setMusicSwiper] = useState({});
  const [videoSwiper, setVideoSwiper] = useState({});
  const [storeShowItem, setStoreShowItem] = useState(3);
  const [isShowAllTour, setIsShowAllTou] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [videoModalOptions, setVideoModalOptions] = useState({
    open: false,
    url: "",
  });

  const headerData = data?.header;
  const socialsData = headerData?.social?.map((s) => {
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
  const footerData = data?.footer || {
    is_show: true,
    copy_right_link: "/",
    list: [
      {
        title: "Privacy Policy",
        link: "#",
      },
      {
        title: "Terms & Conditions",
        link: "#",
      },
      {
        title: "Do Not Sell My Personal Information",
        link: "#",
      },
      {
        title: "Cookie Choices",
        link: "#",
      },
    ],
  };
  const items =
    headerData?.page?.length > 5 &&
    headerData.page.map((p, index) => ({
      key: index,
      label: (
        <a
          rel="noopener noreferrer"
          href={p.slug}
          className="uppercase font-medium text-pri-landing-blue hover:!text-pri-landing"
        >
          {p.title}
        </a>
      ),
    }));

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
    if (storeShowItem >= storeData?.list?.length) {
      setStoreShowItem(3);
      document.querySelector("#store").scrollIntoView();
    } else setStoreShowItem((prevNumItems) => prevNumItems + 3);
  };

  const toggleShowAllTour = () => {
    if (isShowAllTour) {
      setIsShowAllTou(false);
      document.querySelector("#tour").scrollIntoView();
    } else setIsShowAllTou(true);
  };

  return (
    <div
      className={`${textFont.className} overflow-hidden ${
        !data?.application_setting?.background_color &&
        "bg-fixed bg-center bg-cover bg-no-repeat !bg-[url(/images/bg-shawn.png)]"
      } ${classList}`}
      style={{
        backgroundColor: data?.application_setting?.background_color,
      }}
    >
      <header
        className={`${
          !checkEdit ? "fixed" : ""
        } hidden lg:block z-50 h-[76px] inset-0 shadow-[0_3px_5px_0_rgba(0,0,0,0.1)]`}
        style={{
          backgroundColor: data?.header?.color || "#000",
        }}
      >
        <div className="h-full flex items-center px-8 ">
          <div className="w-2/5 flex items-center gap-3 xl:gap-6">
            {headerData?.page?.length < 6 ? (
              headerData?.page?.map((p, index) => (
                <a
                  key={index}
                  href={p.slug}
                  className="uppercase text-pri-landing-blue hover:text-pri-landing"
                >
                  {p.title}
                </a>
              ))
            ) : (
              <Dropdown
                menu={{
                  items,
                }}
                className="min-w-[200px]"
                arrow
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Button
                    type="primary"
                    className="!bg-pri-landing-blue flex items-center"
                  >
                    <MenuOutlined className="text-base" />
                  </Button>
                </a>
              </Dropdown>
            )}
          </div>
          <a href="/" className="w-1/5 flex justify-center">
            {/* <img
              src={data?.header?.image || "/images/logo.png"}
              className="w-[180px]"
            /> */}
            <p className="font-semibold text-xl text-white">Movick Art</p>
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

      {/* Header mobile, tablet */}
      <header
        className="lg:hidden z-10 h-[60px] fixed inset-0 flex items-center justify-center border-b border-b-[rgba(200,200,200,.1)]"
        style={{
          backgroundColor: data?.header?.color || "#000",
        }}
      >
        <a href="/" className="">
          {/* <img
            src={headerData?.image || "/images/logo.png"}
            className="w-[186px] h-[68px]"
          /> */}
          <p className="font-semibold text-xl text-white">Movick Art</p>
        </a>
        <button
          onClick={() => setOpenMenu(true)}
          className="absolute top-1/2 right-5 -translate-y-1/2"
        >
          <MenuOutlined
            style={{
              fontSize: 30,
              color: data?.application_setting?.button_color || "#FFC0A5",
            }}
          />
        </button>

        {/* Menu */}
        <div
          onClick={() => setOpenMenu(false)}
          className={`${
            openMenu ? "z-10 fixed inset-0 bg-black opacity-50" : "opacity-0"
          }`}
        ></div>
        <div
          className={`${
            openMenu
              ? "z-10 translate-x-[30%] md:translate-x-[60%] opacity-1"
              : "translate-x-full opacity-0"
          } transition duration-500 ease-in-out fixed inset-0`}
        >
          <div
            className="w-[70%] md:w-[40%] h-full flex flex-col items-center justify-center gap-y-4"
            style={{
              backgroundColor: data?.header?.color || "#000",
            }}
          >
            {headerData?.is_show &&
              headerData?.page?.map((p, index) => (
                <a
                  key={index}
                  href={p.slug}
                  className="block uppercase text-lg text-pri-landing-blue hover:text-pri-landing"
                >
                  {p.title}
                </a>
              ))}
            <div className="mt-2 flex items-center justify-end gap-4">
              {socialsData?.map((s, index) => (
                <a key={index} href={s.link}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div
        className={`${
          !checkEdit ? "mt-[60px] m-5 lg:m-8  lg:mt-[76px]" : "mx-8"
        } min-h-screen`}
      >
        {/* Banner */}
        {bannerData?.is_show && (
          <Swiper
            itemRef=""
            loop={true}
            slidesPerView={1}
            className="!-mx-5 lg:!-mx-8"
          >
            {bannerData?.list?.map((b, index) => (
              <SwiperSlide key={index}>
                <a
                  href={b.link}
                  className="relative block w-full h-[calc(100vh-60px)] lg:h-[calc(100vh-76px)]"
                >
                  <img
                    src={b.image}
                    className="absolute top-0 left-0 w-full h-full object-full lg:object-cover"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Music */}
        {media?.is_show && (
          <div
            id="music"
            className={`lg:mt-[100px] 2xl:mx-auto ${
              !checkEdit ? "2xl:w-[1440px]" : "2xl:w-[1140px]"
            }`}
          >
            <h1 className="my-10 lg:mt-0 lg:mb-10 lg:pl-20 lg:pr-24 text-center lg:text-end text-5xl lg:text-[110px] font-[900] text-pri-landing">
              MUSIC
            </h1>
            <div className="relative lg:-mt-4 lg:px-16">
              <button
                onClick={() => musicSwiper.slidePrev()}
                className="hidden lg:block absolute left-0 top-1/2 w-16 -translate-y-1/2"
              >
                <div className="relative float-left">
                  <CaretLeftFilled className="-ml-[6px] text-2xl text-pri-landing" />
                  <div className="absolute top-1/2 left-[11px] h-0.5 w-10 bg-pri-landing"></div>
                </div>
              </button>
              <button
                onClick={() => musicSwiper.slideNext()}
                className="hidden lg:block absolute right-0 top-1/2 w-16 -translate-y-1/2"
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
                    <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row">
                      <div className="relative w-full px-[12px] lg:px-0 lg:w-1/2 h-full">
                        <img src={m.image} className="w-full h-auto" />
                        <button
                          onClick={() => musicSwiper.slidePrev()}
                          className="lg:hidden absolute left-0 top-1/2 w-16 -translate-y-1/2"
                        >
                          <div className="relative float-left">
                            <CaretLeftFilled className="-ml-[6px] text-2xl text-pri-landing" />
                            <div className="absolute top-1/2 left-[11px] h-0.5 w-10 bg-pri-landing"></div>
                          </div>
                        </button>
                        <button
                          onClick={() => musicSwiper.slideNext()}
                          className="lg:hidden absolute right-0 top-1/2 w-16 -translate-y-1/2"
                        >
                          <div className="relative float-right">
                            <CaretRightFilled className="-mr-[6px] text-2xl text-pri-landing" />
                            <div className="absolute top-1/2 right-[11px] h-0.5 w-10 bg-pri-landing"></div>
                          </div>
                        </button>
                      </div>
                      <div className="w-full lg:w-1/2 px-[12px] lg:px-0 flex flex-col lg:flex-row items-center text-pri-landing">
                        <div className="lg:px-12 text-center lg:text-start">
                          <h3 className="relative text-center lg:text-start font-semibold text-xs uppercase tracking-[0.3rem]">
                            Latest relase
                            <div className="absolute top-7 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 bg-pri-landing h-[1px] w-[50px]"></div>
                          </h3>
                          <h1 className="mt-12 lg:mt-8 text-[42px] text-center lg:text-start lg:text-6xl font-[900] leading-[1.1em] uppercase font-">
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
          <div
            id="video"
            className={`mt-48 lg:mt-[100px] 2xl:mx-auto ${
              !checkEdit ? "2xl:w-[1440px]" : "2xl:w-[1140px]"
            }`}
          >
            <h1 className="my-10 lg:mb-10 lg:pl-24 lg:pr-20 text-center lg:text-start text-5xl lg:text-[110px] font-[900] text-pri-landing">
              VIDEOS
            </h1>
            <div className="relative lg:-mt-4 lg:px-16">
              <button
                onClick={() => videoSwiper.slidePrev()}
                className="z-50 absolute left-0 top-1/2 w-16 -translate-y-1/2"
              >
                <div className="relative float-left">
                  <CaretLeftFilled className="-ml-[6px] text-2xl text-pri-landing" />
                  <div className="absolute top-[51%] left-[11px] h-0.5 w-10 bg-pri-landing"></div>
                </div>
              </button>
              <button
                onClick={() => videoSwiper.slideNext()}
                className="z-50 absolute right-0 top-1/2 w-16 -translate-y-1/2"
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
                      <img
                        src={v.image}
                        className="aspect-[16/11] md:aspect-video opacity-60"
                      />
                      <div className="w-[65%] lg:w-[70%] text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:top-[30%] lg:translate-y-0">
                        <button
                          onClick={() => handleOpenVideo(v.link)}
                          className="-my-2"
                        >
                          <CaretRightFilled className="text-6xl md:text-8xl lg:text-[120px] text-pri-landing hover:text-pri-landing-blue" />
                        </button>
                        <h1 className="text-2xl line-clamp-2 md:line-clamp-3 lg:text-4xl lg:leading-[60px] text-center text-pri-landing font-[900]">
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
          <div
            id="store"
            className={`2xl:mx-auto ${
              !checkEdit ? "2xl:w-[1440px]" : "2xl:w-[1140px]"
            }`}
          >
            <h1 className="mt-20 lg:mt-[100px] mb-14 lg:mb-8 lg:pl-24 lg:pr-20 text-center lg:text-start text-5xl lg:text-[110px] font-[900] text-pri-landing">
              STORE
            </h1>
            <div className="-mt-3 grid grid-flow-col-1 lg:grid-cols-3 gap-8">
              {storeData?.list?.slice(0, storeShowItem).map((s, index) => (
                <div key={index} className="">
                  <a href={s.link}>
                    <img src={s.image} className="w-full h-auto" />
                  </a>
                  <h2 className="mt-4 tracking-wider text-center md:text-start lg:text-lg text-pri-landing">
                    {s.heading}
                  </h2>
                </div>
              ))}
            </div>

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
                {storeShowItem < storeData?.list?.length
                  ? "Show more"
                  : "Show less"}
              </button>
            </div>
          </div>
        )}

        {/* Tour */}
        {tourData?.is_show && (
          <div
            id="tour"
            className={`mt-48 lg:mt-[100px] 2xl:mx-auto ${
              !checkEdit ? "2xl:w-[1440px]" : "2xl:w-[1140px]"
            }`}
          >
            {" "}
            <h1 className="mb-12 lg:mb-16 lg:pl-20 lg:pr-24 text-center lg:text-end text-5xl lg:text-[110px] font-[900] text-pri-landing">
              TOUR
            </h1>
            <div
              className={`mx-auto ${
                !checkEdit ? "w-full xl:w-[76%] " : "w-[86%]"
              }`}
            >
              {tourData?.list?.map(
                (t, index) =>
                  t.is_show && (
                    <div
                      key={index}
                      onClick={() => router.push(t.link)}
                      className="flex flex-col gap-y-4 md:flex-row py-5 cursor-pointer hover:bg-[rgba(0,0,0,0.5)] border-b border-b-pri-tour"
                    >
                      <div className="md:w-[60%] text-center md:text-start text-white text-xs lg:text-base font-bold">
                        <div className="">{t.info?.date}</div>
                        <div className="mt-1 md:flex gap-2">
                          <h2 className="md:w-[65%] leading-5">
                            {t.info?.title}
                          </h2>
                          <h2 className="mt-1 md:mt-0 md:w-[35%]">
                            {t.info?.artist}
                          </h2>
                        </div>
                        <div className="mt-1 min-h-[12px] opacity-70 text-[0.7rem]">
                          {t.info?.type}
                        </div>
                      </div>
                      <div className="md:w-[40%] flex md:flex-col lg:flex-row justify-center items-center md:items-end md:justify-center lg:justify-end lg:items-center gap-2">
                        {t.isVip ? (
                          <a
                            href={t.button?.vipLink}
                            target="_blank"
                            onClick={stopPropagation}
                            className="min-w-[120px] lg:min-w-[160px] h-10 lg:h-12 flex items-center justify-center text-sm lg:text-base font-bold text-[#2f3237] hover:text-white bg-pri-landing cursor-pointer"
                          >
                            VIP
                          </a>
                        ) : (
                          <div className="lg:min-w-[160px]"></div>
                        )}
                        <a
                          href={t.button?.link}
                          target="_blank"
                          onClick={stopPropagation}
                          className="min-w-[120px] lg:min-w-[160px] h-10 lg:h-12 flex items-center justify-center text-sm lg:text-base font-bold text-black hover:text-[#85c8d5] bg-white border-4 border-pri-landing cursor-pointer"
                        >
                          TICKETS
                        </a>
                      </div>
                    </div>
                  )
              )}
              <div className="mt-16 flex flex-col items-center">
                <h2 className="text-white text-center lg:text-start lg:text-lg font-bold">
                  Get notified when new events are announced in your area
                </h2>
                <a
                  href="#"
                  className="mt-2 block px-5 py-3 font-bold lg:text-sm uppercase border-2 border-black rounded bg-white w-fit hover:text-white hover:bg-black hover:border-white"
                >
                  FOLLOW JOHN MAYER
                </a>
              </div>
              {data?.tours?.list?.length > 5 && (
                <div className="text-center">
                  <button
                    onClick={toggleShowAllTour}
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
                    {isShowAllTour ? "Show less" : "Show all"}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Subscriber */}
        <div
          id="subscribe"
          className={`mt-[140px] lg:mt-[180px] mb-[100px] lg:mb-[200px] flex flex-col lg:flex-row justify-between 2xl:mx-auto ${
            !checkEdit ? "2xl:w-[1440px]" : "2xl:w-[1140px]"
          }`}
        >
          <form className="order-2 lg:order-1 lg:w-[45%] flex flex-col text-pri-landing">
            <label
              htmlFor="email"
              className="text-[10px] md:text-xs tracking-[0.2em] font-bold"
            >
              * EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter email"
              required
              className="p-[10px] uppercase pl-0 bg-transparent border-b-[2px] placeholder:text-sm tracking-widest border-[#d18559] text-[#d18559]"
            />
            <label
              htmlFor="contact"
              className="mt-8 text-[10px] md:text-xs tracking-[0.2em] font-bold"
            >
              * CONTACT
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="enter contact"
              required
              className="p-[10px] uppercase pl-0 bg-transparent border-b-[2px] placeholder:text-sm tracking-widest border-[#d18559] text-[#d18559]"
            />
            <button
              type="submit"
              className={`mx-auto lg:mx-0 mt-10 w-[220px] py-[10px] rounded-3xl text-black font-bold uppercase hover:bg-[#888fc0] transition-colors duration-3000 ${
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
          <div className="order-1 mb-14 lg:mb-0 lg:w-1/2 flex justify-center lg:justify-end items-center text-[42px] lg:text-[80px]  xl:text-[110px] font-[900] text-pri-landing">
            Thank You
          </div>
        </div>
      </div>

      {footerData?.is_show && (
        <footer
          className="py-4 xl:py-0 xl:h-[76px]"
          style={{
            backgroundColor: data?.header?.color || "#000",
          }}
        >
          <div className="h-full flex flex-col gap-y-5 lg:gap-y-2 xl:flex-row justify-end items-center px-8">
            <div className="order-2 xl:order-1 flex-1 flex flex-col lg:flex-row items-center gap-1 lg:gap-2 text-pri-landing-blue">
              <a href={footerData.copy_right_link} className="lg:mr-4">
                © 2023 Island
              </a>
              {footerData?.list?.map((f, index) => (
                <a
                  key={index}
                  href={f.link}
                  className="text-sm xl:text-base text-center lg:text-start hover:text-pri-landing"
                >
                  {f.title}
                </a>
              ))}
            </div>
            <div className="order-1 w-fit flex items-center gap-4">
              {socialsData?.map((s, index) => (
                <a key={index} href={s.link}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </footer>
      )}

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

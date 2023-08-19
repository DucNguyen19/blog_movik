import { Divider } from "antd";
import { useRouter } from "next/router";

function Tour() {
  const router = useRouter();

  const header = {
    is_show: true,
    data: {
      socials: [
        {
          image: "/images/new-facebook.svg",
          link: "#",
        },
        {
          image: "/images/new-instagram.svg",
          link: "#",
        },
        {
          image: "/images/new-youtube.svg",
          link: "#",
        },
        {
          image: "/images/new-twitter.svg",
          link: "#",
        },
        {
          image: "/images/new-cart.svg",
          link: "#",
        },
      ],
      leftImage: "/images/hero-heading-top.png",
      logo: "/images/hero-heading-bottom.png",
      rightImage: "/images/hero-new-side.jpg",
    },
  };
  const tours = [
    {
      is_show: true,
      isVip: true,
      link: "/",
      info: {
        date: "SEP 27, 2023",
        title: "SEMINOLE HARD ROCK HOTEL & CASINO - HOLLYWOOD",
        artist: "HOLLYWOOD, FL",
        type: "SOLO ACOUSTIC TOUR.",
      },
      buttons: [
        {
          vipLink: "#",
          link: "#",
        },
      ],
    },
    {
      is_show: true,
      isVip: true,
      link: "#",
      info: {
        date: "SEP 27, 2023",
        title: "SEMINOLE HARD ROCK HOTEL & CASINO - HOLLYWOOD",
        artist: "HOLLYWOOD, FL",
        type: "SOLO ACOUSTIC TOUR.",
      },
      buttons: [
        {
          vipLink: "#",
          link: "#",
        },
      ],
    },
    {
      is_show: true,
      isVip: false,
      link: "#",
      info: {
        date: "SEP 27, 2023",
        title: "SEMINOLE HARD ROCK HOTEL & CASINO - HOLLYWOOD",
        artist: "HOLLYWOOD, FL",
        type: "SOLO ACOUSTIC TOUR.",
      },
      buttons: [
        {
          vipLink: "#",
          link: "#",
        },
      ],
    },
    {
      is_show: true,
      isVip: false,
      link: "#",
      info: {
        date: "SEP 27, 2023",
        title: "SEMINOLE HARD ROCK HOTEL & CASINO - HOLLYWOOD",
        artist: "HOLLYWOOD, FL",
        type: "SOLO ACOUSTIC TOUR.",
      },
      button: {
        vipLink: "#",
        link: "#",
      },
    },
    {
      is_show: true,
      isVip: true,
      info: {
        date: "SEP 27, 2023",
        title: "SEMINOLE HARD ROCK HOTEL & CASINO - HOLLYWOOD",
        artist: "HOLLYWOOD, FL",
        type: "SOLO ACOUSTIC TOUR.",
      },
      button: {
        vipLink: "#",
        link: "#",
      },
    },
  ];
  const shop = {
    is_show: true,
    link: "/",
    image: "https://johnmayer.com/dist/img/sobrock.png",
  };
  const outNow = {
    is_show: true,
    image: "https://johnmayer.com/dist/img/cover.png",
    app: [
      {
        link: "/spotify",
        image: "/images/icon-spotify.svg",
      },
      {
        link: "/appel",
        image: "/images/icon-apple.svg",
      },
      {
        link: "/itunes",
        image: "/images/icon-itunes.svg",
      },
      {
        link: "/amazon",
        image: "/images/icon-amazon.svg",
      },
      {
        link: "/pandora",
        image: "/images/icon-pandora.svg",
      },
    ],
  };
  const video = {
    is_show: true,
    title: "LAST TRAIN HOME (BALLAD VERSION) OUT NOW",
    link: "https://www.youtube-nocookie.com/embed/tp4fUH2E8uc?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1",
  };

  const stop = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="bg-[#2f3237]">
      {/* Top */}
      <div className="flex">
        <div className="relative w-1/2 flex justify-center items-center">
          <img
            src="/images/bg-tour-gradient.png"
            alt="bg"
            className="absolute left-0 top-0 w-full h-full object-cover"
          />
          <div className="z-10 w-[65%] p-4 flex flex-col justify-center items-center">
            <div className="z-10 flex gap-5">
              {header?.data?.socials?.map((s) => (
                <a href={s.link}>
                  <img src={s.image} alt="icon" />
                </a>
              ))}
            </div>
            <div className="z-10 mt-3">
              <img src={header?.data?.leftImage} alt="img" />
            </div>
            <div className="z-10 mt-10">
              <img src={header?.data?.logo} alt="img" />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src={header?.data?.rightImage} alt="img" />
        </div>
      </div>
      <Divider className="my-0 h-3 bg-pri-tour" />

      {/* Tour */}
      <div>
        <h1 className="py-20 text-7xl font-bold text-center text-pri-tour">
          TOUR DATES
        </h1>
        <div className="w-[73%] mx-auto">
          {tours?.map(
            (t, index) =>
              t.is_show && (
                <div
                  key={index}
                  onClick={() => router.push(t.link)}
                  className="flex py-4 cursor-pointer hover:bg-[rgba(0,0,0,0.05)] border-b border-b-pri-tour"
                >
                  <div className="text-white text-lg font-bold">
                    <div className="">{t.info?.date}</div>
                    <div className="flex">
                      <h2 className="w-[60%] leading-5">{t.info?.title}</h2>
                      <h2 className="w-[40%]">{t.info?.artist}</h2>
                    </div>
                    <span className="opacity-70">{t.info?.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {t.isVip ? (
                      <a
                        href={t.button?.vipLink}
                        target="_blank"
                        onClick={stop}
                        className="w-[160px] h-12 flex items-center justify-center text-lg font-bold text-[#2f3237] hover:text-white bg-pri-tour cursor-pointer"
                      >
                        VIP
                      </a>
                    ) : (
                      <div className="w-[160px]"></div>
                    )}
                    <a
                      href={t.button?.vipLink}
                      target="_blank"
                      onClick={stop}
                      className="w-[160px] h-12 flex items-center justify-center text-lg font-bold text-black hover:text-[#85c8d5] bg-white border-4 border-pri-tour cursor-pointer"
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
          <div className="text-center">
            <button className="mt-32 px-[30px] py-[10px] text-lg bg-pri-tour hover:text-white font-bold">
              SHOW MORE DATES
            </button>
          </div>
        </div>
      </div>

      {/* Shop */}
      <div className="w-[73%] mx-auto mt-32">
        <h1 className="mb-8 text-7xl text-center text-white font-bold">
          SHOP THE
        </h1>
        <a href={shop.link} target="_blank" className="w-fit block mx-auto">
          <img src={shop.image} alt="img" />
        </a>
      </div>

      {/* Out now */}
      <div className="w-[73%] mx-auto mt-32 flex">
        <div className="w-[60%]">
          <img src={outNow?.image} className="" />
        </div>
        <div className="w-[40%]">
          <h1 className="mt-2 text-6xl font-bold text-center text-pri-tour">
            OUT NOW
          </h1>
          <div className="mt-16 px-[80px] flex flex-col items-center justify-center gap-6">
            {outNow?.app?.map((x, index) => (
              <a
                href={x.link}
                target="_blank"
                onClick={stop}
                className="w-full max-w-[340px]  px-5 py-[10px] flex items-center justify-center hover:scale-105 duration-300 bg-white border-4 border-pri-tour cursor-pointer"
              >
                <img src={x.image} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Video */}
      {video?.is_show && (
        <div className="mx-auto flex flex-col items-center justify-center mt-32">
          <div className="relative w-[135.11vh] h-[76vh]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen="allowfullscreen"
              allow="autoplay; fullscreen"
              src={video.link}
            ></iframe>
          </div>
          <h1 className="mt-8 font-bold text-3xl uppercase text-center text-white">
            {video?.title}
          </h1>
        </div>
      )}

      {/* Contact */}
      <div className="mt-32">
        <h1 className="text-[64px] tracking-tight font-bold text-center text-pri-tour">
          NEWSLETTER SIGN UP
        </h1>
        <form action="" className="mt-4 flex justify-center items-center gap-3">
          <input
            required
            placeholder="emai adsress"
            className="pb-[10px] h-full text-2xl text-white font-bold border-b border-b-white placeholder:uppercase placeholder:text-white bg-transparent"
          />
          <button
            type="submit"
            className="px-5 py-[6px] min-w-[160px] text-lg hover:text-white font-bold bg-pri-tour"
          >
            SUBMIT
          </button>
        </form>
      </div>

      <div className="mt-20 py-[30px] font-bold text-sm text-center text-white">
        © 2023 John Mayer. All Rights Reserved. | Built by 45PRESS
      </div>
    </div>
  );
}

export default Tour;

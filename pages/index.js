import LayoutPage from "@/components/Layout/LayoutLanding";
import {
  FacebookFilled,
  InstagramFilled,
  QqCircleFilled,
  TwitterCircleFilled,
  YoutubeFilled,
  AppleFilled,
} from "@ant-design/icons";
import React from "react";

function Home() {
  const data = {
    header: {
      type: "header",
      is_show: true,
      color: "#000",
      image: "images/logo.png",
      page: [
        {
          title: "Music",
          slug: "#music",
        },
        {
          title: "Videos",
          slug: "#video",
        },
        {
          title: "Store",
          slug: "#store",
        },
        {
          title: "Tour",
          slug: "#tour",
        },
        {
          title: "Subscribe",
          slug: "#subscribe",
        },
      ],
      social: [
        {
          image: "facebook",
          link: "facebook.com",
        },
        {
          image: "instagram",
          link: "facebook.com",
        },
        {
          image: "spotify",
          link: "facebook.com",
        },
        {
          image: "twitter",
          link: "facebook.com",
        },
        {
          image: "youtube",
          link: "facebook.com",
        },
        {
          image: "apple",
          link: "facebook.com",
        },
      ],
    },
    banner: {
      _id: "aCK7thBlXP",
      type: "banner",
      is_show: true,
      image: "http://image",
      link: "http://link.com",
      created_at: 1692269317027,
      updated_at: 1692270045233,
    },
    media: {
      _id: "uZLf0HChSy",
      type: "media",
      is_show: true,
      title: "media",
      link: "media.com",
      created_at: 1692283158163,
      updated_at: 1692283234854,
    },
    application_setting: {
      background_color: "#fff",
      button_color: "red",
      title: "Movick blog",
      header_title: "Ebeta",
      store_title: "Store",
      tour_title: "Osaka",
    },
  };

  const socialsData = data?.header?.social?.map((s) => {
    switch (s?.image) {
      case "facebook":
        return {
          icon: <FacebookFilled className="text-xl text-[#888FC0]" />,
          link: s.link,
        };
      case "instagram":
        return {
          icon: <InstagramFilled className="text-xl text-[#888FC0]" />,
          link: s.link,
        };
      case "spotify":
        return {
          icon: <QqCircleFilled className="text-xl text-[#888FC0]" />,
          link: s.link,
        };
      case "twitter":
        return {
          icon: <TwitterCircleFilled className="text-xl text-[#888FC0]" />,
          link: s.link,
        };
      case "youtube":
        return {
          icon: <YoutubeFilled className="text-xl text-[#888FC0]" />,
          link: s.link,
        };
      case "apple":
        return {
          icon: <AppleFilled className="text-xl text-[#888FC0]" />,
          link: s.link,
        };
    }
  });

  return (
    <div
      className="text-[17px]"
      style={{
        backgroundColor: data?.application_setting?.background_color || "#000",
      }}
    >
      <header
        className="h-[76px] fixed inset-0 px-8 flex items-center shadow-[0_3px_5px_0_rgba(0,0,0,0.1)]"
        style={{
          backgroundColor: data?.header?.color || "#000",
        }}
      >
        <div className="w-2/5 flex items-center gap-6">
          {data?.header?.page?.map((p, index) => (
            <a
              key={index}
              href={p.slug}
              target="_blank"
              className="uppercase text-[#888fc0]"
            >
              {p.title}
            </a>
          ))}
        </div>
        <div className="w-1/5 flex justify-center">
          <img
            src={data?.header?.image || "/images/logo.png"}
            className="w-[180px]"
          />
        </div>
        <div className="w-2/5 flex items-center justify-end gap-4">
          {socialsData?.map((s, index) => (
            <a key={index} href={s.link}>
              {s.icon}
            </a>
          ))}
        </div>
      </header>

      <main className="m-8 mt-[76px] min-h-screen">123</main>

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
    </div>
  );
}

export default Home;

import LandingPage from '@/components/LandingPage';
import LayoutAdmin from '@/components/Layout/LayoutAdmin';
import React from 'react'
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function Page() {
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
      list: [
        {
          image:
            "https://www.shawnmendesofficial.com/files/2023/06/sm_wth_desktop_outnow-compressed.jpg",
          link: "#",
        },
        {
          image:
            "https://www.shawnmendesofficial.com/files/2022/09/sm_wyg_desktop_v3-compressed.jpg",
          link: "#",
        },
        {
          image:
            "https://www.shawnmendesofficial.com/files/2022/09/smtwt-desktop-compressed.jpg",
          link: "#",
        },
      ],
      created_at: 1692269317027,
      updated_at: 1692270045233,
    },
    media: {
      _id: "uZLf0HChSy",
      type: "media",
      is_show: true,
      title: "media",
      link: "media.com",
      list: {
        music: [
          {
            image:
              "https://www.shawnmendesofficial.com/files/2020/11/release_202011_SMJB_Monster.jpg",
            heading: "WHAT THE HELL ARE WE DYING FOR ?",
            button: "Stream/download",
            link: "#",
          },
          {
            image:
              "https://www.shawnmendesofficial.com/files/2021/07/release_202107_ab67616d0000b273bec684438c0610c1caab0198.jpg",
            heading: "KEXI (Remix)",
            button: "Stream/download",
            link: "#",
          },
        ],
        video: [
          {
            image:
              "https://www.shawnmendesofficial.com/files/2022/09/tp4fUH2E8uc-compressed.jpg",
            heading:
              "Shawn Mendes – Three Empty Words (Paper Mate InkJoy Live Lyric Video)",
            link: "https://www.youtube-nocookie.com/watch?v=Ou413HaAJj4",
          },
          {
            image:
              "https://www.shawnmendesofficial.com/files/2022/09/KrgJp7Z1Hv8-compressed.jpg",
            heading: "Shawn Mendes – When You’re Gone",
            link: "https://www.youtube-nocookie.com/watch?v=Ou413HaAJj4",
          },
        ],
      },
    },
    store: {
      is_show: true,
      list: [
        {
          image:
            "https://www.shawnmendesofficial.com/files/2022/10/ShawnMendes_Wonder_LP-D2C1_0-compressed.jpg",
          heading: "WONDER LIMITED CLEAR VINYL W/ FOLDOUT POSTER",
          link: "#",
        },
        {
          image:
            "https://www.shawnmendesofficial.com/files/2022/10/ShawnMendes_Wonder_CD-CardDeck-01_50_0-compressed.jpg",
          heading:
            "WONDER DELUXE PACKAGE CD W/ LIMITED COLLECTIBLE CARD PACK I INSIDE",
          link: "#",
        },
        {
          image:
            "https://www.shawnmendesofficial.com/files/2022/10/zine_0.-compressed.jpg",
          heading:
            "WONDER LIMITED EDITION ZINE W/ CD & LIMITED COLLECTIBLE CARD PACK VI INSIDE",
          link: "#",
        },
        {
          image:
            "https://www.shawnmendesofficial.com/files/2022/10/ShawnMendes_Wonder_LP-D2C1_0-compressed.jpg",
          heading: "WONDER LIMITED CLEAR VINYL W/ FOLDOUT POSTER",
          link: "#",
        },
        {
          image:
            "https://www.shawnmendesofficial.com/files/2022/10/ShawnMendes_Wonder_CD-CardDeck-01_50_0-compressed.jpg",
          heading:
            "WONDER DELUXE PACKAGE CD W/ LIMITED COLLECTIBLE CARD PACK I INSIDE",
          link: "#",
        },
        {
          image:
            "https://www.shawnmendesofficial.com/files/2022/10/zine_0.-compressed.jpg",
          heading:
            "WONDER LIMITED EDITION ZINE W/ CD & LIMITED COLLECTIBLE CARD PACK VI INSIDE",
          link: "#",
        },
        {
          image:
            "https://www.shawnmendesofficial.com/files/2022/10/ShawnMendes_Wonder_LP-D2C1_0-compressed.jpg",
          heading: "WONDER LIMITED CLEAR VINYL W/ FOLDOUT POSTER",
          link: "#",
        },
      ],
    },
    tours: {
      is_show: true,
      list: [
        {
          is_show: true,
          isVip: true,
          link: "/test",
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
            date: "OCT 1, 2023",
            title: "SOUND ON SOUND",
            artist: "OCEAN CITY, MD",
            type: "",
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
        {
          is_show: true,
          isVip: false,
          link: "#",
          info: {
            date: "OCT 1, 2023",
            title: "SOUND ON SOUND",
            artist: "OCEAN CITY, MD",
            type: "",
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
      ],
    },
    application_setting: {
      background_color: null,
      button_color: null,
      title: "Movick blog",
      header_title: "Ebeta",
      store_title: "Store",
      tour_title: "Osaka",
    },
  };
  return (
    <>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 11,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: 0,
          background: "white",
          minHeight: '95px'
        }}
      // className='shadow-lg'
      >
        <p className='pl-10 font-bold text-3xl'>Pages</p>
      </Header>
      <div className='px-10 mt-2'>
        <div className='border-t-[1px] border-b-[1px] py-4 cursor-pointer hover:bg-[linear-gradient(315deg,#fafafb_60%,#fff)] group flex justify-between'>
          <div>
            <p className='font-semibold text-lg'>Home Page</p>
            <p className='text-[#99a3ad] text-base'>By Admin</p>
            <p className='text-[#99a3ad] text-base'>Published</p>
          </div>
          <div>
            <div className='border-[1px] border-[#e6e9eb] px-4 py-2 mr-6 group-hover:bg-white'>
              <svg viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" aria-labelledby="fdead37e-640c-4ad7-8e57-d266c29b97db"><title id="fdead37e-640c-4ad7-8e57-d266c29b97db">Go to Editor</title><defs></defs><path className="group-hover:stroke-cyan-500 page_svg__a" d="M21.982 2.018a3.565 3.565 0 00-5.064.034L2.713 16.256.98 23.02l6.764-1.734L21.948 7.08a3.562 3.562 0 00.034-5.063zM16.512 2.459l5.03 5.029"></path></svg>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='relative lg:w-[750px] xl:w-[900px] 2xl:w-[1100px] m-auto shadow-2xl p-1 max-h-[50vh]'>
        <div>
          <LandingPage data={data} checkEdit={true} />
        </div>
      </div> */}
    </>
  )
}

Page.getLayout = ({ page, pageProps }) => (
  <LayoutAdmin {...pageProps}>{page}</LayoutAdmin>
);
export default Page
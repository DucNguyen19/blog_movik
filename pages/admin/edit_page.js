import { checkImageFileUpload } from '@/common/utils';
import LandingPage from '@/components/LandingPage';
import { LeftOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Drawer, Input, Modal, Switch, Upload, message } from 'antd';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function EditPage() {
  const [data, setData] = useState(
    {
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
            link: "facebook.com.vn",
          },
          {
            image:
              "https://www.shawnmendesofficial.com/files/2022/09/sm_wyg_desktop_v3-compressed.jpg",
            link: "youtube.com.vn",
          },
          {
            image:
              "https://www.shawnmendesofficial.com/files/2022/09/smtwt-desktop-compressed.jpg",
            link: "open.spotify.com",
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
    }
  );

  useEffect(() => {
    setFileList(
      {
        banner: {
          ...data.banner,
          images: data.banner.list?.map(el => ({
            ...el,
            name: el.image,
            preview: el.image,
            status: 'done',
            key: el.image,
            url: el.image
          }))
        },
        music: {
          ...data.media.list,
          images: data.media.list.music?.map(el => ({
            ...el,
            name: el.image,
            preview: el.image,
            status: 'done',
            key: el.image,
            url: el.image
          }))
        },
        store: {
          ...data.store,
          images: data.store.list?.map(el => ({
            ...el,
            name: el.image,
            preview: el.image,
            status: 'done',
            key: el.image,
            url: el.image
          }))
        }
      }
    )
  }, [data]);
  const [messageApi, contextHolder] = message.useMessage();
  const alertMess = (type = "info", message) => {
    messageApi.open({
      type: type,
      content: message,
    });
  };
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  const [preview, setPreview] = useState({
    open: false,
    img: "",
    title: "",
    link: "",
    key: ""
  });
  const [fileList, setFileList] = useState({
    banner: {
      images: []
    },
    music: {
      images: []
    },
    store: {
      images: []
    }
  });
  const handleCancel = () => setPreview({
    ...preview,
    open: false
  });

  const handlePreview = async (file) => {
    setPreview({
      open: true,
      img: file.url || file.preview,
      title: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
      link: file.link,
      key: file.key
    })
  };
  function saveLink() {
    console.log(preview, 'previewww');
  }
  const handleChange = ({ fileList: newFileList, file }) => {
    file.preview = URL.createObjectURL(file.originFileObj);
    file.status = 'done'
    setFileList({
      ...fileList,
      banner: {
        ...fileList.banner,
        images: newFileList
      }
    })
  }
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const handleBeforeUpload = file => {
    if (!checkImageFileUpload(file)) {
      alertMess("error", `${file.name} is not support!`)
    }
    return checkImageFileUpload(file) ? true : Upload.LIST_IGNORE
  }

  function previewPage() {
    const dataBanner = JSON.parse(JSON.stringify(fileList.banner.images))
    setData({
      ...data,
      banner: {
        _id: "aCK7thBlXP",
        type: "banner",
        is_show: true,
        list: dataBanner?.map(el => ({
          image: el.preview,
          link: "#"
        })),
        created_at: 1692269317027,
        updated_at: 1692270045233,
      },
    })
    onClose()
    alertMess("success", "Save preview success!")
  }

  const [status, setStatus] = useState({
    banner: true,
    music: true,
    video: true,
    store: true,
    tour: true
  });
  return (
    <div>
      {contextHolder}
      {/* <div className='relative lg:w-[750px] xl:w-[900px] 2xl:w-[1100px] m-auto shadow-2xl p-1 max-h-[50vh]'> */}
      <Modal open={preview.open} title={preview.title} onCancel={handleCancel} okText="Save" onOk={saveLink}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={preview.img}
        />
        <Input value={preview.link} className='mt-2' onChange={(e) => setPreview({ ...preview, link: e.target.value })} />
      </Modal>
      <Drawer
        maskClosable={false}
        title={
          <div className='flex items-center justify-between'>
            <p>Custom content</p>
            <div className='flex gap-2'>
              <Button type='text' className='text-[#2bba3c]' onClick={previewPage}>Preview</Button>
              <Button type='text' danger onClick={onClose}>Cancel</Button>
            </div>
          </div>
        }
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <div>
          {/* banner */}
          <div className='flex justify-between items-center mb-3'>
            <p className='font-semibold text-lg'>Banner</p>
            <Switch checked={status.banner} onChange={(checked) => setStatus({
              ...status,
              banner: checked
            })} checkedChildren="Show" unCheckedChildren="Hide" defaultChecked />
          </div>
          <Upload
            listType="picture-card"
            fileList={fileList.banner.images}
            onPreview={handlePreview}
            onChange={handleChange}
            beforeUpload={handleBeforeUpload}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
        </div>
        {/* music */}
        <div>
          <div className='flex justify-between items-center mb-3'>
            <p className='font-semibold text-lg'>Music</p>
            <Switch checked={status.music} onChange={(checked) => setStatus({
              ...status,
              music: checked
            })} checkedChildren="Show" unCheckedChildren="Hide" defaultChecked />
          </div>
          <Upload
            listType="picture-card"
            fileList={fileList.music.images}
            onPreview={handlePreview}
            onChange={handleChange}
            beforeUpload={handleBeforeUpload}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
        </div>
        {/* store */}
        <div>
          <div className='flex justify-between items-center mb-3'>
            <p className='font-semibold text-lg'>Banner</p>
            <Switch checked={status.store} onChange={(checked) => setStatus({
              ...status,
              store: checked
            })} checkedChildren="Show" unCheckedChildren="Hide" defaultChecked />
          </div>
          <Upload
            listType="picture-card"
            fileList={fileList.store.images}
            onPreview={handlePreview}
            onChange={handleChange}
            beforeUpload={handleBeforeUpload}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
        </div>
      </Drawer>
      <div>
        <div className='mb-6 bg-white px-10 pt-10 pb-0 flex justify-between items-center'>
          <div className='flex gap-8 items-center'>
            <Link href={"/admin/page"}>
              <div className='flex gap-2 items-center  cursor-pointer'>
                <LeftOutlined className='!text-xs' />
                <p>Pages</p>
              </div>
            </Link>
            <p className='text-[#8e9cac]'>Published</p>
            <Button type='text' danger onClick={() => setOpen(true)}>Edit</Button>
          </div>
          <div>
            <Button type='text' className='text-[#2bba3c] cursor-pointer'>Update</Button>
          </div>
        </div>
        <div className='max-w-[1300px] m-auto'>
          <div>
            <p className='text-4xl font-bold text-center mb-2'>Home Page</p>
          </div>
          <LandingPage data={data} checkEdit={true} mode={"editContent"} />
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default EditPage
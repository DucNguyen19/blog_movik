import React, { useState } from 'react';
import { ColumnWidthOutlined, CopyOutlined, DashOutlined, DownOutlined, ExportOutlined, FundOutlined, SettingOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Avatar, Badge, Divider, Dropdown, Layout, Menu, Popover, Space, theme } from 'antd';
import Link from 'next/link';
import Router from 'next/router';
const { Header, Content, Footer, Sider } = Layout;
function LayoutAdmin({ children }) {

  function gotoSite() {
    console.log("click clickkk");
    window.open("/", '_blank').focus();
  }

  const items = [
    {
      icon: <>
        <svg
          className='customIcon'
          viewBox="0 0 24 24"><path d="M22.272 23.247a.981.981 0 00.978-.978V9.747a1.181 1.181 0 00-.377-.8L12 .747l-10.873 8.2a1.181 1.181 0 00-.377.8v12.522a.981.981 0 00.978.978z" className="page_svg__a"></path></svg>
      </>,
      label: (
        <Link href="/admin">
          <p className='font-semibold'>
            Dashboard
          </p>
        </Link>
      ),
      key: "Dashboard"
    },
    {
      icon: <>
        <svg viewBox="0 0 24 24" className='customIcon'>
          <rect className="page_svg__a" x="1.5" y="1.497" width="21" height="21" rx="1.5" ry="1.5"></rect>
          <path d="M1.5 7.497h21m-13.5 15v-15" className="page_svg__a"></path>
        </svg>
      </>,
      label: (
        <div className='font-semibold group flex justify-between relative'>
          <Link href="/admin/view_site">
            <p>View site</p>
          </Link>
          <div className='hidden group-hover:block z-50' onClick={gotoSite}><ExportOutlined /></div>
        </div>
      ),
      key: "View site"
    },
    {
      icon: <>
        <svg className='customIcon' viewBox="0 0 24 24"><defs></defs><path className="page_svg__a" d="M16.5 21.513a1.5 1.5 0 01-1.9 1.446L4.1 20.042A1.5 1.5 0 013 18.6V2.487a1.5 1.5 0 011.9-1.446l10.5 3.391a1.5 1.5 0 011.1 1.445z"></path><path className="page_svg__a" d="M4.5.987h15a1.5 1.5 0 011.5 1.5v15.75a1.5 1.5 0 01-1.5 1.5h-3"></path></svg>
      </>,
      label: (
        <Link href="/admin/page">
          <p className='font-semibold'>
            Pages
          </p>
        </Link>
      ),
      key: "Page"
    }
  ]

  const [selectedKeyItem, setSelectedKeyItem] = useState(["Dashboard"]);

  function selectMenu({ item, key, keyPath, selectedKeys }) {
    setSelectedKeyItem([key])
  }
  return (
    <div>
      <Layout className="!min-h-screen flex">
        <div className='!w-[300px]'>
          <div className=' flex-col'>
            <Sider
              onBreakpoint={(broken) => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
              theme='light'
              width={300}
              style={{
                zIndex: 12,
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                borderRight: "1px solid #e6e9eb"
              }}
            >
              <div className='flex flex-col h-full'>
                <div className="h-16 p-6 flex items-center" >
                  <div className='!bg-[url(https://static.ghost.org/v4.0.0/images/ghost-orb-1.png)] !w-8 !h-8 mr-2 bg-cover'></div>
                  <h2 className='text-lg font-semibold'>Movick Art</h2>
                </div>
                <div className='!flex-1'>
                  <Menu
                    onSelect={selectMenu}
                    selectedKeys={selectedKeyItem}
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    items={items}
                  />
                </div>
                <div className='h-20 grid grid-cols-2 items-center px-6'>
                  <div>
                    <Popover
                      overlayClassName='!min-w-[250px]'
                      placement='topRight'
                      title={() => (
                        <>
                          <div className='flex items-center gap-4'>
                            <Avatar size="large" icon={<UserOutlined />} />
                            <span>Admin</span>
                          </div>
                          <Divider />
                        </>

                      )}
                      content={() => (
                        <div>
                          <p>Help center</p>
                          <Divider />
                          <p>Sign out</p>
                        </div>
                      )}
                      trigger="click"
                    >
                      <div className='cursor-pointer'>
                        <Badge color='green' dot>
                          <Avatar size="large" icon={<UserOutlined className='text-black' />} className='bg-white border-[1px] border-[#ebeef0] ' />
                        </Badge>
                        <DownOutlined className='!ml-2' />
                      </div>
                    </Popover>
                  </div>
                  <div className='text-end cursor-pointer'>
                    <Avatar size="large" icon={<SettingOutlined className='text-black' />} className='bg-white' />
                  </div>
                </div>
              </div>
            </Sider>
          </div>
        </div>
        <div className='!flex-1 bg-white'>
          <Layout className='h-full'>
            <Content
            >
              <div
                className='bg-white h-full px-20'
              >
                {children}
              </div>
            </Content>

          </Layout>
        </div>
      </Layout>
    </div>
  )
}

export default LayoutAdmin
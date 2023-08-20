import LayoutAdmin from '@/components/Layout/LayoutAdmin';
import { ArrowRightOutlined, RiseOutlined, SwapRightOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import Link from 'next/link';
import React from 'react'
const { Header, Content, Footer, Sider } = Layout;

function DashboardAdmin() {
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
      >
        <p className='pl-10 font-bold text-3xl'>Dashboard</p>
      </Header>
      <div className='flex justify-center items-center h-[80vh]'>
        <div className=' min-w-[400px] shadow-[0_4px_24px_rgba(0,0,0,.066)] p-10 rounded-lg flex justify-center items-center text-center'>
          <div>
            {/* <RiseOutlined className='text-6xl' /> */}
            <svg viewBox="0 0 54 54" fill="none" style={{
              width: '65px',
              height: '65px',
              margin: 'auto'
            }}>
              <path d="M52.313 28.688V13.5H37.124" stroke="url(#analytics_svg__paint0_linear_79_20)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M52.313 13.5L34.45 31.363a3.374 3.374 0 01-4.775 0l-7.038-7.038a3.374 3.374 0 00-4.774 0L1.688 40.5" stroke="url(#analytics_svg__paint1_linear_79_20)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <defs><linearGradient id="analytics_svg__paint0_linear_79_20" x1="44.719" y1="13.5" x2="44.719" y2="28.688" gradientUnits="userSpaceOnUse"><stop stopColor="#FB2D8D"></stop><stop offset="1" stopColor="#8E42FF"></stop></linearGradient><linearGradient id="analytics_svg__paint1_linear_79_20" x1="27" y1="13.5" x2="27" y2="40.5" gradientUnits="userSpaceOnUse"><stop stopColor="#FB2D8D"></stop><stop offset="1" stopColor="#8E42FF"></stop></linearGradient></defs>
            </svg>
            <p className='text-lg font-bold leading-[1em] mb-3 tracking-[-.3px] whitespace-nowrap'>Welcome to your Dashboard</p>
            <p className='text-[#626d79] font-semibold mb-4'>You can setting everything from here!</p>
            <Link href={"/"}>
              <p className='customBg'>
                View your site <ArrowRightOutlined className='text-[10px] text-[#ae5aef]' />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


DashboardAdmin.getLayout = ({ page, pageProps }) => (
  <LayoutAdmin {...pageProps}>{page}</LayoutAdmin>
);


export default DashboardAdmin
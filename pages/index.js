import LayoutPage from '@/components/Layout/LayoutLanding';
import React from 'react'

function Home() {
  return (
    <div>
      <p className='text-black'>Hello this is home</p>
    </div>
  )
}


Home.getLayout = ({ page, pageProps }) => (
  <LayoutPage {...pageProps}>{page}</LayoutPage>
);

export default Home
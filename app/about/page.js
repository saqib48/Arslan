import Aboutbanner from '@/components/Aboutbanner'
import Aboutcounter from '@/components/Aboutcounter'
import Aboutskill from '@/components/Aboutskill'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Portfolio from '@/components/Portfolio'
import VideoPromotion from '@/components/VideoPromotion'
import React from 'react'

function about() {
  return (
   <>
    <Header/>
    <main className='bg-[#0d0d0d] text-white'> 
    <Aboutbanner/>
    <Aboutskill/>
    <Aboutcounter/>
    <Portfolio/>
    <VideoPromotion/>
    <Footer/>
    </main>
   </>
  )
}

export default about
import Contactbanner from '@/components/Contactbanner'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import VideoPromotion from '@/components/VideoPromotion'
import React from 'react'

function contact() {
  return (
    <div>
        <Header/>
        <main className='bg-[#101010] text-white'>
            <Contactbanner/>
            <ContactSection/>
            <VideoPromotion/>
            <Footer/>
        </main>
    </div>
  )
}

export default contact
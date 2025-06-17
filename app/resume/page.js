import Aboutskill from '@/components/Aboutskill'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Resume2nd from '@/components/Resume2nd'
import Resumebanner from '@/components/Resumebanner'
import React from 'react'

function resume() {
  return (
    <div>
        <Header/>
        <main className='bg-[#0d0d0d] text-white'>
            <Resumebanner/>
            <Resume2nd/>
            <Aboutskill/>
            <Footer/>
        </main>
    </div>
  )
}

export default resume
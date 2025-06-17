import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Portfolio from '@/components/Portfolio'
import Portfoliobanner from '@/components/Portfoliobanner'
import React from 'react'

function portfolio() {
  return (
    <div>
        <Header/>
        <main className='bg-[#0d0d0d] text-white'>
            <Portfoliobanner/>
            <Portfolio/>
            <Footer/>
        </main>
    </div>
  )
}

export default portfolio
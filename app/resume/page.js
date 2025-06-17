import Aboutskill from '@/components/Aboutskill'
import ExperienceSection from '@/components/ExperienceSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InterestSection from '@/components/InterestSection'
import MySpecialties from '@/components/MySpecialties'
import Resume2nd from '@/components/Resume2nd'
import Resumebanner from '@/components/Resumebanner'
import React from 'react'

function resume() {
  return (
    <div>
        <Header/>
        <main className='bg-[#101010] text-white'>
            <Resumebanner/>
            <Resume2nd/>
            <Aboutskill/>
            <MySpecialties/>
            <InterestSection/>
            <ExperienceSection/>
            <Footer/>
        </main>
    </div>
  )
}

export default resume
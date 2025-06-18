import Banner from '../components/Banner';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Header from '@/components/Header';
import OurServicesSection from '@/components/OurServicesSection';
import Vide0Promotion from '@/components/VideoPromotion';
import Aboutcounter from '@/components/Aboutcounter';
import Aboutskill from '@/components/Aboutskill';

export default function Home() {
  return (
    <>
      <Header/>
      <main className="bg-[#101010] text-white">
        <Banner />
        <div id='about'>
          <Aboutskill/>
          <Aboutcounter/>
        </div>
         <div id='portfolio'>
          <Portfolio />
        </div>
        <Testimonials />
        <OurServicesSection/>
        <Vide0Promotion/>
        <Footer />
      </main>
    </>
  );
}

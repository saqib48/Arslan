import Banner from '../components/Banner';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Header from '@/components/Header';
import IntroSection from '@/components/Introsection';
import OurServicesSection from '@/components/OurServicesSection';
import VideenPromotionSection from '@/components/VideenPromotionSection';

export default function Home() {
  return (
    <>
      <Header/>
      <main className="bg-[#0d0d0d] text-white">
        <Banner />
        <Portfolio />
        <IntroSection/>
        <Testimonials />
        <OurServicesSection/>
        <VideenPromotionSection/>
        <Footer />
      </main>
    </>
  );
}

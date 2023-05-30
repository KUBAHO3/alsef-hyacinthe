import logo from './favicon.ico';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Purpuse from '@/components/Purpuse';
import Services from '@/components/Services';
import Contactus from '@/components/Contactus';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About />
      <Purpuse />
      <Services />
      <Contactus />   
      <Footer />
    </>
  )
}

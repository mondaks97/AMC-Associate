import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import ClientLogos from "../components/ClientLogos";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Philosophy from "../components/Philosophy";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Philosophy/>
      <AboutUs/>
      <Banner/>
      <Services/>
      <ClientLogos/>
      {/* <ContactUs/> */}
      {/* <Footer/> */}
    </>
  );
};

export default HomePage;

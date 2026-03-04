// import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
// import Blog from "../components/Blog";
import ClientLogos from "../components/ClientLogos";
// import ContactUs from "../components/ContactUs";
// import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Philosophy from "../components/Philosophy";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ClientLogos/>
      <Philosophy/>
      {/* <Blog/> */}
      {/* <AboutUs/> */}
      <Banner/>
      <Services/>
      {/* <ContactUs/> */}
      {/* <Footer/> */}
    </>
  );
};

export default HomePage;

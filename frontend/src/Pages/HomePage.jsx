import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
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
    </>
  );
};

export default HomePage;

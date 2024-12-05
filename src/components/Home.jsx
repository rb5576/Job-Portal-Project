import Navbar from "./shared/Navbar.jsx";
import Footer from "./shared/Footer.jsx";
import HeroSection from "./HeroSection.jsx";

export default function Home() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <h1>Category carousel</h1>
        <h1>Latest Jobs</h1>
        <Footer />     
    </div>
  )
};
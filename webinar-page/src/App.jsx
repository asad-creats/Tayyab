import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import PopularWebinars from './components/PopularWebinars';
import Navbar from './components/Navbar'; // <--- New Import
import ContactAgent from './components/ContactAgent'; // <--- New Import
import Footer from './components/Footer'; // <--- New Import
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchSection />
      <PopularWebinars />
      <ContactAgent />
      <Footer />

    </>
  );
}

export default App;

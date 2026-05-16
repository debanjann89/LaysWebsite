import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Hooks
import { usePreloadFrames } from './hooks/usePreloadFrames';

// Components
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VideoShowcase } from './components/VideoShowcase';
import { AboutLays } from './components/AboutLays';
import { OriginStory } from './components/OriginStory';
import { Anatomy } from './components/Anatomy';
import { DecodingFlavor } from './components/DecodingFlavor';
import { Recipes } from './components/Recipes';
import { BuyNow } from './components/BuyNow';
import { StoreLocator } from './components/StoreLocator';
import { Sustainability } from './components/Sustainability';
import { ContactUs } from './components/ContactUs';
import { LegalAccordion } from './components/LegalAccordion';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

function App() {
  const [toastVisible, setToastVisible] = useState(false);
  const { progress, images, isLoaded } = usePreloadFrames();

  const handleOrderClick = () => {
    setToastVisible(false); // Reset to allow re-trigger
    setTimeout(() => {
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000);
    }, 100);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Lay's Magic Masala - The Ultimate Spice Experience</title>
        <meta name="description" content="Experience the explosive flavor of Lay's Indian Magic Masala. A perfect blend of Indian spices for the ultimate snack time." />
        <meta name="theme-color" content="#F4C430" />
      </Helmet>

      <Loader progress={progress} isVisible={!isLoaded} />

      {/* Render the rest of the app only when images are ready to ensure smooth GSAP initialization */}
      {isLoaded && (
        <main className="bg-black text-white selection:bg-lays-yellow selection:text-black">
          <Navbar />
          
          <HeroSection images={images} />
          <AboutLays />
          <OriginStory />
          <Anatomy />
          <DecodingFlavor />
          <VideoShowcase />
          <Recipes />
          <BuyNow onOrderClick={handleOrderClick} />
          <StoreLocator />
          <Sustainability />
          <ContactUs />
          <LegalAccordion />
          
          <Footer />
          
          <Toast 
            isVisible={toastVisible} 
            message="Added to Cart" 
            subtext="Lay's Magic Masala (Party Pack)" 
          />
        </main>
      )}
    </HelmetProvider>
  );
}

export default App;

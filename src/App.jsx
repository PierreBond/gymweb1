import React from 'react';
import { ModalProvider } from './context/ModalContext';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ClassesGrid from './components/ClassesGrid';
import BannerStrip from './components/BannerStrip';
import InstagramGrid from './components/InstagramGrid';
import WhyJoinUs from './components/WhyJoinUs';
import Membership from './components/Membership';
import BecomeStronger from './components/BecomeStronger';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import FeaturesGrid from './components/FeaturesGrid';

const SignupModal = React.lazy(() => import('./components/SignupModal'));

function App() {
  return (
    <ModalProvider>
      <div className="bg-black text-white font-body overflow-x-hidden min-h-screen selection:bg-primary-container selection:text-white pt-[30px]">
        <CustomCursor />
        <AnnouncementBar />
        <Header />
        <main>
          <Hero />
          <WhyJoinUs />
          <BecomeStronger />
          <FeaturesGrid />
          <About />
          <ClassesGrid />
          <BannerStrip />
          <Membership />
          <InstagramGrid />
        </main>
        <Footer />
        
        <React.Suspense fallback={null}>
          <SignupModal />
        </React.Suspense>
      </div>
    </ModalProvider>
  );
}

export default App;

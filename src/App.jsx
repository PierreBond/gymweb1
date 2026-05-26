import React, { useState } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-black text-white font-body overflow-x-hidden min-h-screen selection:bg-primary-container selection:text-white pt-[30px]">
      <CustomCursor />
      <AnnouncementBar />
      <Header onJoinClick={openModal} />
      <main>
        <Hero onJoinClick={openModal} />
        <WhyJoinUs />
        <BecomeStronger />
        <FeaturesGrid />
        <About onJoinClick={openModal} />
        <ClassesGrid />
        <BannerStrip />
        <Membership onJoinClick={openModal} />
        <InstagramGrid />
      </main>
      <Footer onJoinClick={openModal} />
      
      <React.Suspense fallback={null}>
        <SignupModal isOpen={isModalOpen} onClose={closeModal} />
      </React.Suspense>
    </div>
  );
}

export default App;

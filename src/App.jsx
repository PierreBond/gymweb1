import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ClassesGrid from './components/ClassesGrid';
import BannerStrip from './components/BannerStrip';
import InstagramGrid from './components/InstagramGrid';
import Footer from './components/Footer';
import SignupModal from './components/SignupModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-black text-white font-body overflow-x-hidden min-h-screen selection:bg-primary-container selection:text-white pt-[30px]">
      <AnnouncementBar />
      <Header onJoinClick={openModal} />
      <main>
        <Hero onJoinClick={openModal} />
        <About onJoinClick={openModal} />
        <ClassesGrid />
        <BannerStrip />
        <InstagramGrid />
      </main>
      <Footer onJoinClick={openModal} />
      
      <SignupModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;

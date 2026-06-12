import React, { Suspense } from 'react';
import { ModalProvider } from './context/ModalContext';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';

const WhyJoinUs = React.lazy(() => import('./components/WhyJoinUs'));
const BecomeStronger = React.lazy(() => import('./components/BecomeStronger'));
const FeaturesGrid = React.lazy(() => import('./components/FeaturesGrid'));
const About = React.lazy(() => import('./components/About'));
const ClassesGrid = React.lazy(() => import('./components/ClassesGrid'));
const BannerStrip = React.lazy(() => import('./components/BannerStrip'));
const Membership = React.lazy(() => import('./components/Membership'));
const InstagramGrid = React.lazy(() => import('./components/InstagramGrid'));
const Footer = React.lazy(() => import('./components/Footer'));
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
          <Suspense fallback={null}>
            <WhyJoinUs />
            <BecomeStronger />
            <FeaturesGrid />
            <About />
            <ClassesGrid />
            <BannerStrip />
            <Membership />
            <InstagramGrid />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <SignupModal />
        </Suspense>
      </div>
    </ModalProvider>
  );
}

export default App;
